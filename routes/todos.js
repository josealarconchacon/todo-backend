import express from "express";
import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  getStats,
} from "../controllers/todoController.js";
import { validateTodo } from "../middleware/validateTodo.js";

const router = express.Router();

// GET /api/todos - Get all todos
router.get("/", getTodos);

// GET /api/todos/stats - Get todo statistics
router.get("/stats", getStats);

// GET /api/todos/:id - Get single todo
router.get("/:id", getTodo);

// POST /api/todos - Create new todo
router.post("/", validateTodo, createTodo);

// PUT /api/todos/:id - Update todo
router.put("/:id", validateTodo, updateTodo);

// DELETE /api/todos/:id - Delete todo
router.delete("/:id", deleteTodo);

export default router;
