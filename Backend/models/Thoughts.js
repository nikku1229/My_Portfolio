import mongoose from "mongoose";

const thoughtSchema = new mongoose.Schema({
  content: {
    type: String,
    require: true,
  },
  createdBy: {
    type: String,
    default: "Nitish Sharma",
  },
});

const Thoughts = mongoose.model("Thoughts", thoughtSchema);
export default Thoughts;
