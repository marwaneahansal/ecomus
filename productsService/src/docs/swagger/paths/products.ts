import swaggerJSDoc from "swagger-jsdoc";

const ErrorResponse = {
  schema: {
    type: "object",
    properties: {
      message: {
        type: "string",
      },
    },
  },
};

const productsPaths: swaggerJSDoc.Paths = {
  "/products/categories": {
    get: {
      summary: "Get all categories",
      tags: ["Categories"],
      security: [{ accessToken: [] }],
      responses: {
        "200": {
          description: "List of categories",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "boolean",
                  },
                  message: {
                    type: "string",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          format: "uuid",
                        },
                        name: {
                          type: "string",
                        },
                        createdAt: {
                          type: "string",
                          format: "date-time",
                        },
                        updatedAt: {
                          type: "string",
                          format: "date-time",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "401": {
          description: "Unauthorized",
          content: {
            "application/json": ErrorResponse,
          },
        },
      },
    },
    post: {
      summary: "Create a new category",
      tags: ["Categories"],
      security: [{ accessToken: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
              },
              required: ["name"],
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Category created",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "boolean",
                  },
                  message: {
                    type: "string",
                  },
                  data: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        format: "uuid",
                      },
                      name: {
                        type: "string",
                      },
                      createdAt: {
                        type: "string",
                        format: "date-time",
                      },
                      updatedAt: {
                        type: "string",
                        format: "date-time",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "400": {
          description: "Invalid request",
          content: {
            "application/json": ErrorResponse,
          },
        },
        "500": {
          description: "Internal server error",
          content: {
            "application/json": ErrorResponse,
          },
        },
      },
    },
  },
  "/products/": {
    get: {
      summary: "Get all products",
      tags: ["Products"],
      security: [{ accessToken: [] }],
      responses: {
        "200": {
          description: "List of products",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "boolean",
                  },
                  message: {
                    type: "string",
                  },
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          format: "uuid",
                        },
                        name: {
                          type: "string",
                        },
                        image: {
                          type: "string",
                          format: "url",
                        },
                        description: {
                          type: "string",
                        },
                        price: {
                          type: "number",
                          format: "double",
                        },
                        categoryId: {
                          type: "string",
                          format: "uuid",
                        },
                        categroy: {
                          type: "object",
                          properties: {
                            id: {
                              type: "string",
                              format: "uuid",
                            },
                            name: {
                              type: "string",
                            },
                            createdAt: {
                              type: "string",
                              format: "date-time",
                            },
                            updatedAt: {
                              type: "string",
                              format: "date-time",
                            },
                          },
                        },
                        createdAt: {
                          type: "string",
                          format: "date-time",
                        },
                        updatedAt: {
                          type: "string",
                          format: "date-time",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "401": {
          description: "Unauthorized",
          content: {
            "application/json": ErrorResponse,
          },
        },
      },
    },
    post: {
      summary: "Create a new product",
      tags: ["Products"],
      security: [{ accessToken: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
                price: {
                  type: "number",
                  format: "double",
                },
                description: {
                  type: "string",
                },
                categoryId: {
                  type: "string",
                  format: "uuid",
                },
              },
              required: ["name"],
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Product created",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "boolean",
                  },
                  message: {
                    type: "string",
                  },
                  data: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        format: "uuid",
                      },
                      name: {
                        type: "string",
                      },
                      image: {
                        type: "string",
                        format: "url",
                      },
                      description: {
                        type: "string",
                      },
                      price: {
                        type: "number",
                        format: "double",
                      },
                      categoryId: {
                        type: "string",
                        format: "uuid",
                      },
                      categroy: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            format: "uuid",
                          },
                          name: {
                            type: "string",
                          },
                          createdAt: {
                            type: "string",
                            format: "date-time",
                          },
                          updatedAt: {
                            type: "string",
                            format: "date-time",
                          },
                        },
                      },
                      createdAt: {
                        type: "string",
                        format: "date-time",
                      },
                      updatedAt: {
                        type: "string",
                        format: "date-time",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "400": {
          description: "Invalid request",
          content: {
            "application/json": ErrorResponse,
          },
        },
        "500": {
          description: "Internal server error",
          content: {
            "application/json": ErrorResponse,
          },
        },
      },
    },
  },
};

export default productsPaths;
