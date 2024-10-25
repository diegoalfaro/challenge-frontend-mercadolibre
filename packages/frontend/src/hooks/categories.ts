import categoriesService from "@services/categories-service";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [{ loading, categories }, set] = useState({
    loading: false,
    categories: [],
  });

  useEffect(() => {
    set((value) => ({ ...value, loading: true }));
    categoriesService
      .getCategories()
      .then((res) => res.json())
      .then(({ categories }) =>
        set((value) => ({ ...value, categories, loading: false }))
      );

    return () => {
      set((value) => ({ ...value, categories: [], loading: false }));
    };
  }, []);

  return { loading, categories };
};
