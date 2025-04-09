const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Middleware to log requests
app.use((req, res, next) => {
    console.log(`📢 Received request: ${req.method} ${req.url}`);
    next();
});

// ✅ Load menu data from data.json
const dataPath = path.join(__dirname, "data.json");

app.get("/api/menus", (req, res) => {
    try {
        const data = fs.readFileSync(dataPath, "utf-8"); // Read file
        const jsonData = JSON.parse(data); // Parse JSON
        res.json(jsonData.menus); // Send only menus array
    } catch (error) {
        console.error("❌ Error reading JSON file:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/api/courses", (req, res) => {
    try {
        const data = fs.readFileSync(dataPath, "utf-8"); // Read file
        const jsonData = JSON.parse(data); // Parse JSON
        res.json(jsonData.courses); // Send only menus array
    } catch (error) {
        console.error("❌ Error reading JSON file:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/api/quizeQuestions", (req, res) => {
    try {
        const data = fs.readFileSync(dataPath, "utf-8"); // Read file
        const jsonData = JSON.parse(data); // Parse JSON
        res.json(jsonData.quizeQuestions); // Send only menus array
    } catch (error) {
        console.error("❌ Error reading JSON file:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
