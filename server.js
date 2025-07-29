import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todos.js";
import { errorHandler } from "./middleware/errorHandler.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB().catch((error) => {
  console.error("Failed to connect to MongoDB:", error);
  process.exit(1);
});

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5173",
      "http://localhost:4173",
      "http://127.0.0.1:5173",
      "http://127.0.0.1:3000",
      process.env.FRONTEND_URL, // Add your Vercel frontend URL
    ].filter(Boolean), // Remove undefined values
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Todo API is running",
    endpoints: {
      health: "/api/health",
      todos: "/api/todos",
      docs: "Check your API documentation",
    },
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use("/api/todos", todoRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Todo API is running",
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}/api`);
});
