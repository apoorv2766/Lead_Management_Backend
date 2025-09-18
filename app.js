require('dotenv').config({ quiet: true });
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const leadRoute = require("./routes/leadRoute");
const dotenv = require("dotenv");
dotenv.config();


app.use(cors());
app.use(express.json());


//database connection
async function main() {
    await mongoose.connect(process.env.MONGO_URI);
};


//connecting to database
main().then(() => {
    console.log("Database is connected");
}).catch((err) => console.log(err));


//for testing
app.get("/", (req, res) => {
    res.send("this api for lead management system is working fine");
})
app.use('/api/lead', leadRoute);

app.listen(process.env.PORT, () => {
    console.log("App is listening at PORT 5000");
})