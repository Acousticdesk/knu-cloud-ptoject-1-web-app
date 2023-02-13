import { useState } from "react";

export function useAsync() {
  const [isLoading, setIsLoading] = useState(false);

  return {
    asyncPerform: (doAsync: (...args: unknown[]) => Promise<unknown>) => {
      setIsLoading(true);
      return doAsync().finally(() => setIsLoading(false));
    },
    isLoading,
  };
}
