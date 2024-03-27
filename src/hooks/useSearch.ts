import { useState, useMemo, useEffect } from "react";

const useSearch = <T extends Record<K, any>, K extends string>(
  initialItems: T[] = [],
  searchFields: K[] = []
) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [items, setItems] = useState<T[]>(initialItems);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const filteredItems = useMemo(() => {
    if (!searchKeyword) return items;
    return items.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        return (
          typeof value === "string" &&
          value.toLowerCase().includes(searchKeyword.toLowerCase())
        );
      })
    );
  }, [items, searchKeyword, searchFields]);

  return { setSearchKeyword, filteredItems };
};

export default useSearch;
