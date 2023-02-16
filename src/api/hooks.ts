import { useState } from "react";
import { timeout } from "../async/timeout";

export function useEntities() {
  const [entities, setEntities] = useState([]);
  const [isLoadingEntities, setIsLoadingEntities] = useState(false);

  return {
    obtainEntities: (fetch: () => Promise<unknown>) => {
      setIsLoadingEntities(true);
      return (
        fetch()
          // @ts-ignore
          .then((res) => res.json())
          .then((entities) => setEntities(entities))
          .finally(() => timeout(500))
          .then(() => setIsLoadingEntities(false))
      );
    },
    entities,
    isLoadingEntities,
  };
}
