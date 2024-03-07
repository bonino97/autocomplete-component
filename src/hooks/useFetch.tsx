// src/hooks/useFetch.ts

import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetch = <T,>(
  fetchFunction: (query: string) => Promise<T>,
  query: string
): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // POINT: 4 - The function to filter the data should be asynchronous. You can use
        // mock data (such as a JSON array), but the function which uses it
        // should be asynchronous (similar to a real REST call).
        const result = await fetchFunction(query);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, query]);

  return { data, isLoading, error };
};
