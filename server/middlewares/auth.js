import jwt from 'jsonwebtoken';

// Middleware to authenticate user requests
const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    // Check if token is provided
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        // Verify the token
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user ID to the request body if valid
        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id;
        } else {
            return res.json({ success: false, message: 'Invalid token' });
        }

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.json({ success: false, message: 'Token verification failed' });
    }
};

export default userAuth;
