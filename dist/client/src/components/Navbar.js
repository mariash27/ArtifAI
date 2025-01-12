"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const assets_1 = require("../assets/assets");
const react_router_dom_1 = require("react-router-dom");
const AppContext_1 = require("../context/AppContext");
const Navbar = () => {
    const { user, setShowLogin, logout, credit } = (0, react_1.useContext)(AppContext_1.AppContext);
    const navigate = (0, react_router_dom_1.useNavigate)();
    console.log(credit, 'hell');
    return (<div className='flex items-center justify-between py-4'>
      <react_router_dom_1.Link to='/'>
        <img src={assets_1.assets.logo} alt="Logo" className='w-28 sm:w-32 lg:w-40'/>
      </react_router_dom_1.Link>

        <div>
            {user ?
            <div className='flex items-center gap-2 sm:gap-3'>
                <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                    <img className='w-5' src={assets_1.assets.credit_star} alt=""/>
                    <p className='text-xs sm:text-sm font-medium text-grey-600'>Credit left : {credit}</p>
                </button>
                <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
                <div className='relative group'>
                    <img src={assets_1.assets.profile_icon} className='w-10 drop-shadow' alt=""/>
                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                        <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                            <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                        </ul>

                    </div>
                </div>
            </div>
            :
                <div className='flex items-center gap-2 sm:gap-5'>
                <p onClick={() => navigate()} className='cursor-pointer'>Pricing</p>
                <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
            </div>}
        </div>



    </div>);
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map