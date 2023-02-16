import { useState } from "react";
import { timeout } from "./timeout";

export function useAsync() {
  const [isLoading, setIsLoading] = useState(false);

  return {
    asyncPerform: (doAsync: (...args: unknown[]) => Promise<unknown>) => {
      setIsLoading(true);
      return doAsync()
        .finally(() => timeout(500))
        .then(() => setIsLoading(false));
    },
    isLoading,
  };
}
