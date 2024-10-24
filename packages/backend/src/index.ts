import express, { Request, Response } from "express";
import { author, port, itemsNumber } from "./config.js";

const app = express();

// Serving static files (HTML, CSS, JS)
app.use(express.static("public"));

// Defining a route for handling client communication
app.get("/api/items", async (req: Request, res: Response) => {
  const url = new URL("https://api.mercadolibre.com/sites/MLA/search");
  const q = req?.query.q;
  url.searchParams.append("q", q as string);
  url.searchParams.append("limit", Number(itemsNumber).toString());

  const fetchResponse = await fetch(url);

  const { results: items, available_filters: availableFilters } =
    await fetchResponse.json();

  const categories = availableFilters
    ?.find(({ id }) => id === "category")
    ?.values?.map(({ name }) => name);

  res.json({ author, items, categories });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
