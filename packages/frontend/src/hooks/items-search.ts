import { useEffect, useState } from "react";

import itemsService from "@services/items-service";

export const useItemsSearch = (query: string) => {
  const [{ loading, items, categories }, set] = useState({
    loading: false,
    categories: [],
    items: [],
  });

  useEffect(() => {
    if (query) {
      set((value) => ({ ...value, loading: true }));
      itemsService
        .searchItems(query)
        .then((res) => res.json())
        .then(({ items, categories }) =>
          set((value) => ({ ...value, items, categories, loading: false }))
        );
    } else {
      set((value) => ({ ...value, categories: [], items: [], loading: false }));
    }

    return () => {
      set((value) => ({ ...value, categories: [], items: [], loading: false }));
    };
  }, [query]);

  return { loading, items, categories };
};
