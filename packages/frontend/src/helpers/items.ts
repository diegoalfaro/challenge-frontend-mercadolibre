import i18n from "@i18n";
import { notNull } from "./commons";

export const getFormattedCondition = (condition: string) => {
  switch (condition) {
    case "new":
      return i18n.t("items.condition.new");
    case "used":
      return i18n.t("items.condition.used");
  }
  return null;
};

export const getFormattedSoldQuantity = (soldQuantity: number) =>
  soldQuantity
    ? i18n.t("items.soldQuantity", { count: soldQuantity })
    : undefined;

export const getFormattedFreeShipping = (freeShipping: boolean) =>
  freeShipping ? i18n.t("items.freeShipping") : undefined;

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

export const getBuyURL = (itemId: string, quantity = 1) => {
  const url = new URL("https://www.mercadolibre.com.ar");
  url.pathname = "/gz/checkout/buy";
  url.searchParams.append("item_id", itemId);
  url.searchParams.append("quantity", quantity.toString());
  return url;
};

export const getItemURL = (itemId: string) => {
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
