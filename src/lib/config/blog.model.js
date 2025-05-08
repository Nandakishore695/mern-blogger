import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { required: true, type: String },
    description: { required: true, type: String },
    category: { required: true, type: String },
    author: { required: true, type: String },
    image: { required: true, type: String },
    authorImg: { required: true, type: String },
  },
  { timestamp: true }
);

//  Check if already compiled, or define new
export const Blogmodel =
  mongoose.models.Blog || mongoose.model("Blog", blogSchema);
