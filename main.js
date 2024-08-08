const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT || 3000;

async function main() {
    const app = express();
    // config
    require("./src/config/mongoos.config");
    // adding app route
    app.listen(PORT, () => {
        console.log(`[SERVER] is running on ${PORT}`)
    })
}

main()