import SwaggerJsDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 3002;

const swaggerDefinition: SwaggerJsDoc.SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Products Service',
    version: '1.0.0',
    description: 'Products Service API',
  },
  servers: [
    {
      url: `http://localhost:${PORT}`
    },
  ],
  components: {
    securitySchemes: {
      accessToken: {
        type: 'http',
        scheme: 'bearer',
        bererFormat: 'JWT',
      },
    },
  },
}

export default swaggerDefinition;