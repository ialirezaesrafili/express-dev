# Express.js Backend Server

This is a simple Express.js server configured with Swagger for API documentation and MongoDB connectivity.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)

## Project Overview

This project sets up an Express.js server that:

- Connects to MongoDB using Mongoose.
- Uses Swagger to generate API documentation.
- Loads environment variables using `dotenv`.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (Node package manager)
- [MongoDB](https://www.mongodb.com/) (if running locally)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ialirezaesrafili/express-dev.git
   cd your-repo-name
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Environment Variables

This project uses environment variables to configure the server. Create a `.env` file in the root directory and add the following variables:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/your-database-name
```

- `PORT`: The port on which the server will run.
- `MONGO_URI`: The MongoDB connection string.

## Running the Server

To start the server, run:

```bash
npm start
```

The server will start on the port specified in the `.env` file or default to `3000`.

You should see an output like:

```bash
[SERVER] is running on 3000
```

## API Documentation

This project is configured with Swagger to generate API documentation. Once the server is running, you can view the API documentation by navigating to:

```
http://localhost:3000/api-docs
```

This will display the Swagger UI with the available endpoints.

## Folder Structure

The project structure is organized as follows:

```
├── src
│   ├── config
│   │   ├── mongoos.config.js     # Mongoose configuration for MongoDB
│   │   └── swagger.config.js     # Swagger configuration for API documentation
│   └── routes                    # Directory for route files (e.g., user routes)
├── .env                          # Environment variables
├── package.json                  # Project dependencies and scripts
└── main.js                     # Main server file
```

## Code Explanation

The main server file is `main.js`. Here’s a breakdown of what it does:

```javascript
const express = require("express");          // Import Express.js framework
const dotenv = require("dotenv");            // Import dotenv to manage environment variables
const swaggerConfig = require("./src/config/swagger.config"); // Import Swagger config

dotenv.config();                             // Load environment variables from .env file

const PORT = process.env.PORT || 3000;       // Define the port number from environment variable or default to 3000

async function main() {
    const app = express();                   // Initialize an Express application

    // MongoDB and other configurations
    require("./src/config/mongoos.config");  // Initialize Mongoose and connect to MongoDB

    // Swagger configuration
    swaggerConfig(app);                      // Set up Swagger for API documentation

    // Start the server
    app.listen(PORT, () => {
        console.log(`[SERVER] is running on ${PORT}`); // Log that the server is running
    });
}

main();                                      // Execute the main function to start the server
```