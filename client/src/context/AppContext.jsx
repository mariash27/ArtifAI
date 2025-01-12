import { createContext, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(false);

    // Backend API base URL
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Navigation hook
    const navigate = useNavigate();

    // Fetch user credits and update state
    const loadCreditsData = useCallback(async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/credits', {
                headers: { token },
            });
    
            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }, [backendUrl, token]);

    // Generate an image using the AI backend
    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/image/generate-image',
                { prompt },
                { headers: { token } }
            );

            if (data.success) {
                loadCreditsData(); // Refresh credits after image generation
                return data.resultImage; // Return the generated image URL
            } else {
                toast.error(data.message); // Show error message
                loadCreditsData();

                // Redirect to the "Buy Credits" page if balance is zero
                if (data.creditBalance === 0) {
                    navigate('/buy');
                }
            }
        } catch (error) {
            toast.error(error.message); // Handle request errors
        }
    };

    // Log out the user
    const logout = () => {
        localStorage.removeItem('token'); // Remove token from local storage
        setToken(''); // Clear token in state
        setUser(null); // Reset user state
    };

    // Automatically load user data when token changes
    useEffect(() => {
        if (token) {
            loadCreditsData();
        }
    }, [token, loadCreditsData]);

    // Context value containing state and functions
    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditsData,
        logout,
        generateImage
    };

    // Provide the context to children components
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};


AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validates that children
};

export default AppContextProvider;
