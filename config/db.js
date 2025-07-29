import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error("MONGODB_URI environment variable is not set!");
      console.log("Please set MONGODB_URI in your environment variables");
      process.exit(1);
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    console.log(
      "Server will continue running but database operations will fail"
    );
  }
};

export default connectDB;
