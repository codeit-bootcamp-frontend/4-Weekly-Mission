import { useStore } from "@nanostores/react";
import { useCallback } from "react";
import { searchWord } from "store/store";

export function useSearch() {
  const query = useStore(searchWord);

  const setQuery = useCallback((query: string) => {
    searchWord.set(query);
  }, []);

  return {
    query,
    setQuery,
  };
}
