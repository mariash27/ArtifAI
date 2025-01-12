import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {

    // Event listener for successful connection
    mongoose.connection.on('connected', () => {
        console.log("Database Connected");
    });

    // Connect to the MongoDB instance
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`);
};

export default connectDB;
