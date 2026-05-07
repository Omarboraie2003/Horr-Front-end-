import { useState, useEffect } from "react";
import { getClientProfile } from "../../../services/clientService";

/**
 * useAuth - Hook to manage global authentication state.
 * Currently simplified to fetch the client profile.
 */
export default function useAuth() {
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const data = await getClientProfile();
      setUser(data);
    } catch (err) {
      console.error("Auth Error:", err);
      setError(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return { 
    user, 
    loading, 
    error, 
    isAuthenticated: !!user,
    role: user?.role || "client", // Default to client for now
    logout,
    refreshUser: fetchUser 
  };
}
