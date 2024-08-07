const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT || 3000;
async function main(){
    const app = express();
    // config

    app.listen(PORT, () => {
        console.log(`[SERVER] is running on ${PORT}`)
    })
}

main()