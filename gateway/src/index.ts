import { NextFunction, Request, Response } from "express";
import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import env from "dotenv";
import axios from "axios";
import swaggerUi from "swagger-ui-express";

env.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const swaggerEndpoints = [
  { name: "Auth", url: "http://auth:3001/swagger.json" },
  { name: "Products", url: "http://products:3002/swagger.json" },
  { name: "Orders", url: "http://orders:3003/swagger.json" },
];

app.get("/swagger.json", async (req, res) => {
  try {
    const specs = await Promise.all(
      swaggerEndpoints.map((endpoint) => axios.get(endpoint.url).then((response) => response.data))
    );
    const compbinedComponents = specs.reduce(
      (components, spec) => ({
        schemas: { ...components.schemas, ...spec.components?.schemas },
        responses: { ...components.responses, ...spec.components?.responses },
      }),
      { schemas: {}, responses: {} }
    );
    []
    const combinedSpec = {
      openapi: "3.0.0",
      info: {
        title: "Ecomus API Docs",
        version: "1.0.0",
        description: "Centralized documentation for all microservices",
      },
      servers: [{ url: `http://localhost:${PORT}` }],
      paths: specs.reduce((paths, spec) => ({ ...paths, ...spec.paths }), {}),
      components: {
        ...compbinedComponents,
        securitySchemes: {
          accessToken: {
            type: "http",
            scheme: "bearer",
            bererFormat: "JWT",
          },
          refreshToken: {
            type: "apiKey",
            in: "cookie",
            name: "refreshToken",
          },
        },
      },
    };

    res.json(combinedSpec);
  } catch (error) {
    console.error("Error fetching Swagger specs:", error);
    res.status(500).send("Failed to load Swagger specs.");
  }
});

app.use("/api-docs", swaggerUi.serve, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const combinedSpec = await axios
      .get(`http://localhost:${PORT}/swagger.json`)
      .then((response) => response.data);
    swaggerUi.setup(combinedSpec)(req, res, next);
  } catch (error) {
    console.error("Error fetching Swagger specs:", error);
    res.status(500).send("Failed to load Swagger UI.");
  }
});

app.use("/auth", proxy("http://auth:3001"));
app.use("/products", proxy("http://products:3002"));
app.use("/orders", proxy("http://orders:3003"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
