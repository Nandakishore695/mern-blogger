import mongoose from "mongoose";

const emailSchema = mongoose.Schema({
  isEmailId: { type: String, required: true, unique: true },
  createDate: { type: Date, default: Date.now },
});

export const UserEmail = mongoose.models.emailSchema || mongoose.model("UserEmail", emailSchema);
