import SwaggerJsDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 3003;

const swaggerDefinition: SwaggerJsDoc.SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Orders Service',
    version: '1.0.0',
    description: 'Orders Service API',
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