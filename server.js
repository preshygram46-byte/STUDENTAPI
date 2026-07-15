const express = require("express");

const app = express();

// Allow Express to read JSON
app.use(express.json());

// Import routes
const studentRoutes = require("./routes/studentRoutes");

// Use the student routes
app.use("/students", studentRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Student API!");
});

// Start the server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});