import { useState, useEffect } from 'react';

function useFetchData<T, P>(
  fetchFunction: (params: P) => Promise<T>,
  params: P,
  dependencies?: unknown[]
): T | null {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Reset states on dependency change
    setIsLoading(true);
    setError(false);

    fetchFunction(params)
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, [fetchFunction, params, dependencies]);

  if (isLoading || error) return null;

  return data;
}

export default useFetchData;
