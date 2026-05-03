import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  totalLikes: {
    type: Number,
    default: 0,
  },
});

const Likes = mongoose.model("Like", likeSchema);
export default Likes;
