import mongoose from "mongoose";

let initialized = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-imdb",
    });
    initialized = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
