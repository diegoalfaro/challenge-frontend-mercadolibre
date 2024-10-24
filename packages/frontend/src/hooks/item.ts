import { useEffect, useState } from "react";

import itemsService from "@services/items-service";

export const useItem = (itemId: string) => {
  const [{ loading, item }, set] = useState({
    loading: false,
    item: undefined,
  });

  useEffect(() => {
    if (itemId) {
      set((value) => ({ ...value, loading: true }));
      itemsService
        .getItemById(itemId)
        .then((res) => res.json())
        .then(({ item }) =>
          set((value) => ({ ...value, item, loading: false }))
        );
    } else {
      set((value) => ({ ...value, item: undefined, loading: false }));
    }

    return () => {
      set((value) => ({ ...value, item: undefined, loading: false }));
    };
  }, [itemId]);

  return { loading, item };
};
