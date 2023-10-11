import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },

    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reply: {
      type: [Schema.Types.ObjectId],
      ref: "Reply",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
