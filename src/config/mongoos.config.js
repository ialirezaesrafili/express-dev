const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to DB.");
}).catch(err => {
    console.log(err?.message ?? "Failed DB connection");
})