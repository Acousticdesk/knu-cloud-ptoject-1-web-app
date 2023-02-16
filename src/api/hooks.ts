import { useState } from "react";

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
          .finally(() => setIsLoadingEntities(false))
      );
    },
    entities,
    isLoadingEntities,
  };
}
