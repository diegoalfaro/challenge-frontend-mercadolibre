import React, { useEffect, useState } from "react";

import itemsService from "@services/items-service";

export const useItem = (itemId: string) => {
  const [{ loading, item, category }, set] = useState({
    loading: false,
    item: undefined,
    category: undefined,
  });

  useEffect(() => {
    if (itemId) {
      set((value) => ({ ...value, loading: true }));
      itemsService
        .getItemById(itemId)
        .then((res) => res.json())
        .then(({ item, category }) =>
          set((value) => ({ ...value, item, category, loading: false }))
        );
    } else {
      set((value) => ({
        ...value,
        item: undefined,
        category: undefined,
        loading: false,
      }));
    }

    return () => {
      set((value) => ({
        ...value,
        item: undefined,
        category: undefined,
        loading: false,
      }));
    };
  }, [itemId]);

  return { loading, item, category };
};

interface ItemContextValue {
  loading: boolean;
  item?: any;
  category?: any;
}

export const ItemContext = React.createContext<ItemContextValue>({
  loading: false,
});

export const ItemContextProvider = ({
  itemId,
  children,
}: React.PropsWithChildren<{ itemId: string }>) => {
  const { loading, item, category } = useItem(itemId);

  return (
    <ItemContext.Provider value={{ loading, item, category }}>
      {children}
    </ItemContext.Provider>
  );
};
