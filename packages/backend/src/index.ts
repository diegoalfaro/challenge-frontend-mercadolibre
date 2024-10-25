import express, { Request, Response } from "express";
import path from "path";

import { author, defaultSiteId, port } from "./config.js";

import {
  getCategoriesBySiteId,
  getCategoryById,
  getFormattedItemById,
  getItemsByQuery,
} from "./helpers.js";

const app = express();

app.use(express.static("public"));

app.get("/api/categories", async (req: Request, res: Response) => {
  const siteId =
    typeof req?.headers?.["site-id"] === "string"
      ? req?.headers?.["site-id"]
      : defaultSiteId;

  const categories = await getCategoriesBySiteId(siteId);

  res.json({
    categories,
  });
});

app.get("/api/items/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const secure = req.secure;

  const { site_id, category_id, ...item } = await getFormattedItemById(
    id,
    secure
  );

  const category = await getCategoryById(category_id);

  res.json({
    author,
    item,
    category,
  });
});

app.get("/api/items", async (req: Request, res: Response) => {
  const query = req?.query.q as string;
  const { categories, items } = await getItemsByQuery(query);
  res.json({ author, categories, items });
});

app.get("*", function (req: Request, res: Response) {
  res.sendFile(path.resolve("public", "index.html"));
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
