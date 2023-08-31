const express = require("express");
const dotenv = require("dotenv");
const User = require("./routes/UserRoute");
const { notFound, errorHandler } = require("./middleware/ErrorMiddleware");
const connectDB = require("./config/Database");
const cors = require("cors");
const path = require("path");
const FloraInfos = require("./routes/flora_info/FloraInfoRoute");

const app = express();
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));
app.use(cors());

// Navigate On Env
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "./config/.env",
  });
}

// Imported Routes

app.use("/api/user", User);
app.use("/api/flora-info", FloraInfos);

// Deployment
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

// For API Error Handling

app.use(notFound);
app.use(errorHandler);

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
});

// Connect to Database

connectDB();

// Connect to Localhost Server
const server = app.listen(
  process.env.PORT,
  console.log(`Server runs on port ${process.env.PORT}`)
);

// For Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
