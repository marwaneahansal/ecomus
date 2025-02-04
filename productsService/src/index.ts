import express from "express";
import cors from "cors";
import env from "dotenv";
import { router } from "./routes";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerDefinition from "./docs/swagger/swaggerDef";
import swaggerUi from "swagger-ui-express";
import productsPaths from "./docs/swagger/paths/products";

env.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerPaths = {
  ...productsPaths,
}

const swaggerDocs = swaggerJSDoc({
  swaggerDefinition: {
    ...swaggerDefinition,
    paths: swaggerPaths,
  },
  apis: [],
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/swagger.json', (_, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerDocs);
});

app.use(router);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
