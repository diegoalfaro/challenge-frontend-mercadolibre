import express, { Request, Response } from "express";
import { author, port, itemsNumber, apiBaseUrl, decimals } from "./config.js";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/api/items/:id", async (req: Request, res: Response) => {
  const url = new URL(apiBaseUrl);

  url.pathname = `/items/${req.params.id}`;
  const fetchItem = fetch(url);

  url.pathname = `/items/${req.params.id}/description`;
  const fetchDescription = fetch(url);

  const [
    {
      id,
      title,
      price,
      currency_id,
      thumbnail,
      pictures,
      condition,
      sold_quantity,
      shipping,
    },
    description,
  ] = await Promise.all([fetchItem, fetchDescription]).then((promises) =>
    Promise.all(promises.map((promise) => promise.json()))
  );

  const item = {
    id,
    title,
    price: {
      currency: currency_id,
      amount: price,
      decimals,
    },
    picture: thumbnail,
    pictures: pictures.map(({ url, secure_url }) =>
      req.secure ? secure_url : url
    ),
    condition,
    free_shipping: shipping.free_shipping,
    sold_quantity,
    description: description.text,
  };

  res.json({
    author,
    item,
  });
});

app.get("/api/items", async (req: Request, res: Response) => {
  const url = new URL(apiBaseUrl);
  url.pathname = "/sites/MLA/search";

  const q = req?.query.q;
  url.searchParams.append("q", q as string);
  url.searchParams.append("limit", Number(itemsNumber).toString());

  const fetchResponse = await fetch(url);

  const { results, available_filters: availableFilters } =
    await fetchResponse.json();

  const categories = availableFilters
    ?.find(({ id }) => id === "category")
    ?.values?.map(({ name }) => name);

  const items = results.map(
    ({ id, title, sale_price, thumbnail, condition, shipping }) => ({
      id,
      title,
      price: {
        currency: sale_price.currency_id,
        amount: sale_price.amount,
        decimals,
      },
      picture: thumbnail,
      condition,
      free_shipping: shipping.free_shipping,
    })
  );

  res.json({ author, categories, items });
});

app.get("*", function (req: Request, res: Response) {
  res.sendFile(path.resolve("public", "index.html"));
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
