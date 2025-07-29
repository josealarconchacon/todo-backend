import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdDate: {
      type: String,
      default: function () {
        return new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      },
    },
    completedDate: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Update completedDate when todo is marked as completed
todoSchema.pre("save", function (next) {
  if (this.isModified("completed") && this.completed && !this.completedDate) {
    this.completedDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  next();
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
