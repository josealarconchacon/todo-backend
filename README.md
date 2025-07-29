# Todo Backend API

A RESTful API for managing todos built with Express.js and MongoDB.

## Features

- ✅ CRUD operations for todos
- ✅ MongoDB integration with Mongoose
- ✅ Input validation with express-validator
- ✅ Error handling middleware
- ✅ CORS enabled
- ✅ Environment variable configuration

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. MongoDB Setup

You have two options:

**Option A: Local MongoDB**

- Install MongoDB locally
- Start MongoDB service
- Use `mongodb://localhost:27017/todo-app`

**Option B: MongoDB Atlas (Cloud)**

- Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
- Create a cluster
- Get your connection string
- Replace the MONGODB_URI in your .env file

### 3. Run the Application

**Development mode (with auto-restart):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

## API Endpoints

### Todos

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get single todo
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo
- `GET /api/todos/stats` - Get todo statistics

### Health Check

- `GET /api/health` - Check API status
