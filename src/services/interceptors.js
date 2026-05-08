import { ENDPOINTS } from "./endpoints";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export const setupInterceptors = (axiosInstance) => {
  // REQUEST INTERCEPTOR
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // RESPONSE INTERCEPTOR
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      // If error is 401 and we haven't tried refreshing yet
      if (error.response?.status === 401 && !originalRequest._retry) {
        
        // If we are already refreshing, queue this request
        if (isRefreshing) {
          return new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers['Authorization'] = 'Bearer ' + token;
              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        return new Promise(function (resolve, reject) {
          // Call the refresh-token endpoint
          // Note: withCredentials: true ensures the cookie is sent
          axiosInstance
            .post(ENDPOINTS.AUTH.REFRESH_TOKEN)
            .then(({ data }) => {
              // The backend should return the new JWT in the body
              const newToken = data.token || data.jwt || data;
              localStorage.setItem('token', newToken);
              axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
              originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
              processQueue(null, newToken);
              resolve(axiosInstance(originalRequest));
            })
            .catch((err) => {
              processQueue(err, null);
              localStorage.removeItem('token');
              window.location.href = '/login';
              reject(err);
            })
            .finally(() => {
              isRefreshing = false;
            });
        });
      }

      return Promise.reject(error);
    }
  );
};
