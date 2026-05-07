import { useState, useEffect, useCallback } from "react";

/**
 * useFetch - A generic hook for making API calls.
 * 
 * @param {Function} apiFunc - The service function to call (e.g., getClientJobs).
 * @param {Array} dependencies - Array of values that trigger a refetch when changed.
 * @param {Boolean} immediate - Whether to fire the request immediately on mount.
 */
export default function useFetch(apiFunc, dependencies = [], immediate = true) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error,   setError]   = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFunc();
      setData(result);
    } catch (err) {
      console.error("useFetch Error:", err);
      setError(err.response?.data?.message || err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, [apiFunc]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [...dependencies]); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error, setData, refetch: fetchData };
}
