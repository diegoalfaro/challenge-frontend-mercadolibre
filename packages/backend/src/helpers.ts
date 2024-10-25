import { itemsNumber, apiBaseUrl, decimals } from "./config.js";

export const getItemsByQuery = async (query: string) => {
  const url = new URL(apiBaseUrl);
  url.pathname = "/sites/MLA/search";

  url.searchParams.append("q", query);
  url.searchParams.append("limit", Number(itemsNumber).toString());

  const { results, available_filters: availableFilters } = await fetch(
    url
  ).then((r) => r.json());

  const categories = availableFilters
    ?.find(({ id }) => id === "category")
    ?.values?.map(({ name }) => name);

  const items = results.map(
    ({
      id,
      title,
      sale_price,
      thumbnail,
      condition,
      shipping,
      official_store_name,
    }) => ({
      id,
      title,
      price: {
        currency: sale_price.currency_id,
        amount: sale_price.amount,
        decimals,
      },
      store_name: official_store_name,
      picture: thumbnail,
      condition,
      free_shipping: shipping.free_shipping,
    })
  );

  return { categories, items };
};

export const getItemById = async (itemId: string) => {
  const url = new URL(apiBaseUrl);
  url.pathname = `/items/${itemId}`;
  return await fetch(url).then((r) => r.json());
};

export const getItemDescriptionById = async (itemId: string) => {
  const url = new URL(apiBaseUrl);
  url.pathname = `/items/${itemId}/description`;
  return await fetch(url).then((r) => r.json());
};

export const getCategoriesBySiteId = async (siteId: string) => {
  const url = new URL(apiBaseUrl);
  url.pathname = `/sites/${siteId}/categories`;
  return await fetch(url).then((r) => r.json());
};

export const getCategoryById = async (categoryId: string) => {
  const url = new URL(apiBaseUrl);
  url.pathname = `/categories/${categoryId}`;
  return await fetch(url).then((r) => r.json());
};

export const getFormattedItemById = async (id: string, secure = false) => {
  const [item, description] = await Promise.all([
    getItemById(id),
    getItemDescriptionById(id),
  ]);

  const {
    site_id,
    title,
    price,
    category_id,
    currency_id,
    thumbnail,
    pictures,
    condition,
    sold_quantity,
    shipping,
    seller_address,
  } = item;

  return {
    site_id,
    id,
    title,
    place: seller_address?.search_location?.state?.name,
    price: {
      currency: currency_id,
      amount: price,
      decimals,
    },
    category_id,
    picture: thumbnail,
    pictures: pictures.map(({ url, secure_url }) =>
      secure ? secure_url : url
    ),
    condition,
    free_shipping: shipping.free_shipping,
    sold_quantity,
    description: description.plain_text,
  };
};
