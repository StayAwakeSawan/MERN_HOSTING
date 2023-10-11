import mongoose from "mongoose";

export default async function db() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/tutorial_space`);
    console.log("connected to DB.");
  } catch (e) {
    console.log("Failed to connect DB");
  }
}
