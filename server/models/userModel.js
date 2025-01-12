import mongoose from "mongoose";

// Define schema for user collection
const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // User's name
    email: { type: String, required: true, unique: true }, // User's unique email
    password: { type: String, required: true }, // User's hashed password
    creditBalance: { type: Number, default: 5 }, // Initial credit balance
});

// Create or retrieve the user model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
