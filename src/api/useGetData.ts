import { useState, useEffect } from 'react';

export type APIError = {
  error: string;
};

function useFetchData<T, P>(
  fetchFunction: (params: P) => Promise<T>,
  params: P,
  dependencies?: unknown[]
): T | undefined {
  const [data, setData] = useState<T>();

  useEffect(() => {
    fetchFunction(params)
      .then((response) => {
        setData(response);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          // eslint-disable-next-line no-console
          console.error(error.message);
        }
      });
  }, [fetchFunction, params, dependencies]);

  return data;
}

export default useFetchData;
