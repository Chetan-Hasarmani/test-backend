const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Node.js backend is running on AWS EC2 🚀");
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Server is healthy",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Chetan" },
        { id: 2, name: "Demo User" }
    ]);
});

app.post("/api/users", (req, res) => {
    const user = req.body;

    res.status(201).json({
        message: "User created successfully",
        data: user
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});