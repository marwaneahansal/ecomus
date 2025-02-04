import SwaggerJsDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 3001;

const swaggerDefinition: SwaggerJsDoc.SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Auth Service',
    version: '1.0.0',
    description: 'Auth Service API',
  },
  servers: [
    {
      url: `http://localhost:${PORT}`,
    },
  ],
  components: {
    securitySchemes: {
      accessToken: {
        type: 'http',
        scheme: 'bearer',
        bererFormat: 'JWT',
      },
      refreshToken: {
        type: 'apiKey',
        in: 'cookie',
        name: 'refreshToken',
      }
    },
  },
}

export default swaggerDefinition;