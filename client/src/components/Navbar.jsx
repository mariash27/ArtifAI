import { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    // Accessing context values
    const { user, setShowLogin, logout, credit } = useContext(AppContext);
    const navigate = useNavigate();

    // Handler for clicking the Pricing link
    const handlePricingClick = () => {
        if (user) {
            navigate('/pricing'); // Navigate to the Pricing page if the user is logged in
        } else {
            alert('You need to log in to access pricing.'); // Show alert if not logged in
        }
    };

    return (
        <div className="flex items-center justify-between py-4">
            {/* Logo Section */}
            <Link to="/">
                <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
            </Link>

            <div>
                {user ? (
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Button to navigate to the Buy Credits page */}
                        <button
                            onClick={() => navigate('/buy')}
                            className="flex items-center gap-2 bg-green-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
                        >
                            <img className="w-5" src={assets.credit_star} alt="Credit Star" />
                            <p className="text-xs sm:text-sm font-medium text-gray-600">
                                Credit left: {credit}
                            </p>
                        </button>

                        {/* Displaying the user's name */}
                        <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>

                        {/* Profile icon with a dropdown menu */}
                        <div className="relative group">
                            <img src={assets.profile_icon} className="w-10 drop-shadow" alt="Profile Icon" />
                            <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                                    <li
                                        onClick={logout}
                                        className="py-1 px-2 cursor-pointer pr-10"
                                    >
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 sm:gap-5">
                        {/* Pricing link */}
                        <p onClick={handlePricingClick} className="cursor-pointer">
                            Pricing
                        </p>

                        {/* Login button */}
                        <button
                            onClick={() => setShowLogin(true)}
                            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-7 py-2 sm:px-10 text-sm rounded-full hover:shadow-lg transition-all duration-300"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
