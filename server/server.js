import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 4000; // Port for the server
const app = express();

// Middleware for JSON parsing and enabling CORS
app.use(express.json());
app.use(cors());

// Connect to the MongoDB database
await connectDB();

// API routes
app.use('/api/user', userRouter); // Routes for user-related operations
app.use('/api/image', imageRouter); // Routes for image-related operations

// Default route to confirm API is working
app.get('/', (req, res) => res.send("API Working"));

// Start the server
app.listen(PORT, () => console.log('Server running on port ' + PORT));
