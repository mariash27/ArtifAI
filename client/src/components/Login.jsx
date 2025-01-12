import { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('Login'); // Track current form state: Login or Sign Up
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext); 

    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Track password visibility

    // Handle login or registration
    const onSubmitHandler = async (e) => {
        e.preventDefault(); // Prevent form reload

        try {
            if (state === 'Login') {
                // User login
                const { data } = await axios.post(backendUrl + '/api/user/login', { email, password });
                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token); // Save token to localStorage
                    setShowLogin(false); // Close modal on success
                } else {
                    toast.error(data.message); // Display error message
                }
            } else {
                // User registration
                const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });
                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            toast.error(error.message); // Handle request errors
        }
    };

    // Prevent page scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm 
            bg-black/30 flex justify-center items-center"
        >
            <motion.form
                onSubmit={onSubmitHandler}
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white p-8 sm:p-12 rounded-lg shadow-lg text-slate-600 w-full max-w-sm"
            >
                <h1 className="text-center text-3xl text-gray-800 font-semibold mb-2">{state}</h1>
                <p className="text-sm text-center text-gray-500 mb-6">
                    Welcome back! Please sign in to your account.
                </p>

                {/* Name field for Sign Up */}
                {state !== 'Login' && (
                    <div className="border border-gray-300 px-4 py-3 flex items-center gap-3 rounded-md mb-4 focus-within:border-blue-500 focus-within:shadow-lg transition">
                        <img src={assets.profile_user} alt="User Icon" className="w-5 h-5" />
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            placeholder="Full Name"
                            required
                            className="w-full bg-transparent outline-none placeholder:text-gray-400 text-gray-700"
                        />
                    </div>
                )}

                {/* Email input */}
                <div className="border border-gray-300 px-4 py-3 flex items-center gap-3 rounded-md mb-4 focus-within:border-green-600 focus-within:shadow-lg transition">
                    <img src={assets.email_icon} alt="Email Icon" className="w-5 h-5" />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full bg-transparent outline-none placeholder:text-gray-400 text-gray-700"
                    />
                </div>

                {/* Password input with visibility toggle */}
                <div className="border border-gray-300 px-4 py-3 flex items-center gap-3 rounded-md mb-6 focus-within:border-green-600 focus-within:shadow-lg transition">
                    <img src={assets.lock_icon} alt="Lock Icon" className="w-5 h-5" />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        required
                        className="w-full bg-transparent outline-none placeholder:text-gray-400 text-gray-700"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-600 focus:outline-none"
                    >
                        {showPassword ? '👁️' : '🙈'}
                    </button>
                </div>

                <p className="text-sm text-green-600 text-right mb-6 hover:underline cursor-pointer">
                    Forgot password?
                </p>

                <button className="bg-green-600 w-full text-white py-3 rounded-md font-medium hover:bg-green-700 transition">
                    {state === 'Login' ? 'Login' : 'Create Account'}
                </button>

                {/* Switch between login and sign up */}
                {state === 'Login' ? (
                    <p className="mt-6 text-center text-sm">
                        {`Don't have an account?`}{' '}
                        <span
                            className="text-green-600 font-medium cursor-pointer hover:underline"
                            onClick={() => setState('Sign Up')}
                        >
                            Sign up
                        </span>
                    </p>
                ) : (
                    <p className="mt-6 text-center text-sm">
                        Already have an account?{' '}
                        <span
                            className="text-green-600 font-medium cursor-pointer hover:underline"
                            onClick={() => setState('Login')}
                        >
                            Login
                        </span>
                    </p>
                )}

                {/* Close modal */}
                <img
                    onClick={() => setShowLogin(false)}
                    src={assets.cross_icon}
                    alt=""
                    className="absolute top-5 right-5 cursor-pointer"
                />
            </motion.form>
        </div>
    );
};

export default Login;
