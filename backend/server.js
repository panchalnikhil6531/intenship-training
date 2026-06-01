const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Backend API
app.get("/api/data", (req, res) => {
    res.json({
        name: "Nikhil",
        course: "B.Tech IT",
        message: "Frontend Connected Successfully"
    });
});

// Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});