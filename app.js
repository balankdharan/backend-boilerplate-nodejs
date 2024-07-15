const express = require("express");
const connectDB = require("./config/db");
// const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
// app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

module.exports = app;
