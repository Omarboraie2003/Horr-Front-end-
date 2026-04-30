export const setupInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      // Modify request before it is sent (e.g., attach auth token)
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle global response errors (e.g., redirect on 401)
      return Promise.reject(error);
    }
  );
};
