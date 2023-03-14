import { createServer } from "vite";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function start() {
  const app = express();

  const vite = await createServer({
    root: __dirname,
    server: {
      middlewareMode: true,
    },
  });

  // use vite's connect instance as middleware
  app.use(vite.middlewares);

  // serve index.html for all non-api routes
  app.get("*", async (req, res) => {
    const url = req.originalUrl;
    const template = await vite.transformIndexHtml(url, '<div id="app"></div>');
    res.status(200).set({ "Content-Type": "text/html" }).end(template);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}

start();
