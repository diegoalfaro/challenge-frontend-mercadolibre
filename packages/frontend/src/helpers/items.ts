import { notNull } from "./commons";

export const getFormattedCondition = (condition: string) => {
  switch (condition) {
    case "new":
      return "Nuevo";
    case "used":
      return "Usado";
  }
  return null;
};

export const getFormattedSoldQuantity = (soldQuantity: number) =>
  soldQuantity ? `${soldQuantity} vendidos` : undefined;

export const getFormattedFreeShipping = (freeShipping: boolean) =>
  freeShipping ? `Envío gratis` : undefined;

export const getItemDataHeaderInfo = ({
  condition,
  soldQuantity,
  freeShipping,
}: {
  condition: string;
  soldQuantity: number;
  freeShipping: boolean;
}) =>
  [
    getFormattedCondition(condition),
    getFormattedSoldQuantity(soldQuantity),
    getFormattedFreeShipping(freeShipping),
  ].filter(notNull);

export const getSearchURL = (search: string) => {
  const url = new URL(window.location.origin);
  url.pathname = "/items";
  url.searchParams.append("search", search);
  return url;
};

export const getBuyURL = (itemId: string) => {
  const url = new URL("https://articulo.mercadolibre.com.ar");
  const [_, acronym, number] = /([a-zA-Z]+)(\d+)/g.exec(itemId);
  url.pathname = `${acronym}-${number}`;
  return url;
};

export const getItemBreadcrumb = ({
  category,
  title,
}: {
  category: any;
  title: string;
}) => {
  const categoryItems =
    category?.path_from_root?.map(({ name }: { name: string }) => {
      const url = getSearchURL(name);
      return {
        label: name,
        href: `${url.pathname}${url.search}`,
      };
    }) || [];
  return [...categoryItems, { label: title, href: "/" }];
};
