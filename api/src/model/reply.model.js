import mongoose, { Schema } from "mongoose";

const replySchema = new Schema({
  body: {
    type: String,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Reply = mongoose.model("Reply", replySchema);
export default Reply;
