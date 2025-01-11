import SwaggerJsDoc from "swagger-jsdoc";

const swaggerDefinition: SwaggerJsDoc.SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Auth Service',
    version: '1.0.0',
    description: 'Auth Service API',
  },
  servers: [
    {
      url: 'http://localhost:3001',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bererFormat: 'JWT',
      },
    },
  },
}

export default swaggerDefinition;