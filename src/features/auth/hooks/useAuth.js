import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe, logout as logoutThunk } from "../authSlice";

/**
 * useAuth - Hook to manage global authentication state using Redux.
 */
export default function useAuth() {
  const dispatch = useDispatch();
  const { user, loading, error, isAuthenticated, isInitialized } = useSelector((state) => state.auth);

  const refreshUser = () => {
    dispatch(fetchMe());
  };

  const logout = () => {
    dispatch(logoutThunk());
  };

  useEffect(() => {
    // Only fetch if we haven't initialized yet and not currently loading
    if (!isInitialized && !loading && !user) {
      dispatch(fetchMe());
    }
  }, [dispatch, isInitialized, loading, user]);

  return { 
    user, 
    loading, 
    error, 
    isAuthenticated,
    role: user?.role || "client", 
    logout,
    refreshUser 
  };
}
