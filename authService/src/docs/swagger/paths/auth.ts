import swaggerJSDoc from "swagger-jsdoc";


const ErrorResponse = {
  schema: {
    type: "object",
    properties: {
      message: {
        type: "string",
      },
    },
  }
}

const authPaths: swaggerJSDoc.Paths = {
  '/': {
    get: {
      summary: "Hello World from auth",
      tags: ["Auth"],
      responses: {
        "200": {
          description: "Hello World from auth",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                  },
                },
              },
            },
          }
        },
      },
    },
  },
  '/register': {
    post: {
      summary: "Register a new user",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  format: "email",
                },
                name: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
              },
              required: ["email", "name", "password"],
            },
          },
        },
      },
      responses: {
        "201": {
          description: "User created successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    
                  },
                },
              },
            },
          }
        },
        "409": {
          description: "User already exists",
          content: {
            "application/json": ErrorResponse
          }
        },
        "500": {
          description: "Internal server error during user registration",
          content: {
            "application/json": ErrorResponse
          }
        },
      },
    },
  },
  '/login': {
    post: {
      summary: "Login a user",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  format: "email",
                },
                password: {
                  type: "string",
                },
              },
              required: ["email", "password"],
            },
          },
        },
      },
      responses: {
        "200": {
          description: "User logged in successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    
                  },
                },
              },
            },
          }
        },
        "404": {
          description: "User not found or invalid credentials",
          content: {
            "application/json": ErrorResponse
          }
        },
        "500": {
          description: "Internal server error during user registration",
          content: {
            "application/json": ErrorResponse
          }
        },
      },
    },
  },
  '/refresh-token': {
    post: {
      summary: "Refresh user token",
      tags: ["Auth"],
      responses: {
        "200": {
          description: "User token refreshed successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    
                  },
                },
              },
            },
          }
        },
        "403": {
          description: "Access denied, token missing or expired",
          content: {
            "application/json": ErrorResponse
          }
        },
        "404": {
          description: "User not found",
          content: {
            "application/json": ErrorResponse
          }
        },
      },
    },
  },
  '/me': {
    get: {
      summary: "Get current user",
      tags: ["Auth"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        "200": {
          description: "Current user",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "object",
                    properties: {
                      user: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                            format: "uuid",
                          },
                          email: {
                            type: "string",
                            format: "email",
                          },
                          name: {
                            type: "string",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          }
        },
        "401": {
          description: "Unauthorized",
          content: {
            "application/json": ErrorResponse
          }
        },
      },
    },
  },
};

export default authPaths;
