import { Schema, model } from "mongoose";

const blogCategoryRelSchema = new Schema(
  {
    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// - 1 1
// - 1 2
// - 2 2

const BlogCategoryRel = model("BlogCategoryRel", blogCategoryRelSchema);
export default BlogCategoryRel;
