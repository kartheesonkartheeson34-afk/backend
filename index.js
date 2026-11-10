
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/conndb");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("backend done-----");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
