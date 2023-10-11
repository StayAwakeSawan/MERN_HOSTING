import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 5,
      required: true,
    },

    subtitle: {
      type: String,
    },

    description: {
      type: String,
      minLength: 10,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;

// MOvie    <--- MOvieActorRel  -->         Actor
