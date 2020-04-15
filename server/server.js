const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const rotues = require("./routes/api");
const cors = require("cors");
dotenv.config();

// Connect Database
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api", rotues);

const port = process.env.port;

app.listen(port, () => console.log(`Server is running on ${port}`));
