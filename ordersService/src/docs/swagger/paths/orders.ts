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

const ordersPaths: swaggerJSDoc.Paths = {
  "/": {
    get: {
      summary: "Get all orders",
      tags: ["Orders"],
      security: [{ accessToken: [] }],
      responses: {
        "200": {
          description: "List of orders",
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
                        userId: {
                          type: "string",
                          format: "uuid",
                        },
                        status: {
                          type: "string",
                          enum: ["pending", "completed"],
                        },
                        total: {
                          type: "number",
                          format: "double",
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
      summary: "Create a new order",
      tags: ["Orders"],
      security: [{ accessToken: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                products: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        format: "uuid",
                      },
                      quantity: {
                        type: "number",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Order created",
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
                      userId: {
                        type: "string",
                        format: "uuid",
                      },
                      status: {
                        type: "string",
                        enum: ["pending", "completed"],
                      },
                      total: {
                        type: "number",
                        format: "double",
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

export default ordersPaths;
