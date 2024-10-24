import { useEffect, useState } from "react";

type MediaQueryListValues = Pick<MediaQueryListEvent, "matches" | "media">;

const getMediaQueryList = (query: string) => window.matchMedia(query);

export const useMediaQuery = (query: string) => {
  const initialMql = getMediaQueryList(query);

  const [mql, setMql] = useState(initialMql);
  const [values, setValues] = useState<MediaQueryListValues>(initialMql);

  useEffect(() => {
    setMql(getMediaQueryList(query));
  }, [query]);

  useEffect(() => {
    mql.addEventListener("change", setValues);

    return () => {
      mql.removeEventListener("change", setValues);
    };
  }, [mql]);

  const { matches, media } = values;

  return { matches, media };
};
