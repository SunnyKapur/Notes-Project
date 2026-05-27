import mongoose from "mongoose";

let noteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

let UserModel = mongoose.model("users", noteSchema);
export default noteSchema;
