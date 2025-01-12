import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

// Generate an image based on user prompt
export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;

        // Validate user and prompt
        const user = await userModel.findById(userId);
        if (!user || !prompt) {
            return res.json({ success: false, message: 'Missing Details' });
        }

        // Check user's credit balance
        if (user.creditBalance === 0 || user.creditBalance < 0) {
            return res.json({ 
                success: false, 
                message: 'No Credit Balance', 
                creditBalance: user.creditBalance 
            });
        }

        // Prepare form data for the API call
        const formData = new FormData();
        formData.append('prompt', prompt);

        // Call the external API to generate the image
        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: { 'x-api-key': process.env.CLIPDROP_API },
            responseType: 'arraybuffer'
        });

        // Convert the response to a base64 image
        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Deduct one credit from the user
        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

        // Respond with the generated image and updated credit balance
        res.json({ 
            success: true, 
            message: "Image Generated", 
            creditBalance: user.creditBalance - 1, 
            resultImage 
        });

    } catch (error) {
        // Handle errors
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
