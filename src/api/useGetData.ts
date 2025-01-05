import { useState, useEffect } from 'react';

function useFetchData<T, P>(
  fetchFunction: (params: P) => Promise<T>,
  params: P,
  dependencies?: unknown[]
): T | null {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset states on dependency change
    setIsLoading(true);
    setError(null);

    fetchFunction(params)
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [fetchFunction, params, dependencies]);

  if (isLoading || error) return null;

  return data;
}

export default useFetchData;
