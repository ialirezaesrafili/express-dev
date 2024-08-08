const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function swaggerConfig(app) {
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.0.0", // Use OpenAPI 3.0.0 specification
            info: {
                title: "Express API Documentation",
                description: "API documentation for the Express backend",
                version: "1.0.0",
                contact: {
                    name: "Alireza Esrafili",
                    email: "alirezaesrafili53@gmail.com",
                },
            }

        },
        apis: [], // Specify the path to your route files
    });
    const swagger = swaggerUi.setup(swaggerDocument, {});
    app.use("/", swaggerUi.serve, swagger);
}


module.exports = swaggerConfig;
