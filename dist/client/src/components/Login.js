"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const assets_1 = require("../assets/assets");
const AppContext_1 = require("../context/AppContext");
const framer_motion_1 = require("framer-motion");
const axios_1 = __importDefault(require("axios"));
const react_toastify_1 = require("react-toastify");
const Login = () => {
    const [state, setState] = (0, react_1.useState)('Login');
    const { setShowLogin, backendUrl, setToken, setUser } = (0, react_1.useContext)(AppContext_1.AppContext);
    const [name, setName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const onSubmitHandler = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            if (state === 'Login') {
                const { data } = yield axios_1.default.post(backendUrl + '/api/user/login', { email, password });
                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                }
                else {
                    react_toastify_1.toast.error(data.message);
                }
            }
            else {
                const { data } = yield axios_1.default.post(backendUrl + '/api/user/register', { name, email, password });
                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                }
                else {
                    react_toastify_1.toast.error(data.message);
                }
            }
        }
        catch (error) {
            react_toastify_1.toast.error(error.message);
        }
    });
    (0, react_1.useEffect)(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    return (<div className=" fixed  top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm 
    bg-black/30 flex justify-center items-center">
      <framer_motion_1.motion.form onSubmit={onSubmitHandler} initial={{ opacity: 0.2, y: 50 }} transition={{ duration: 0.3 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-white p-8 sm:p-12 rounded-lg shadow-lg text-slate-600 w-full max-w-sm">
        <h1 className="text-center text-3xl text-gray-800 font-semibold mb-2">{state}</h1>
        <p className="text-sm text-center text-gray-500 mb-6">Welcome back! Please sign in to your account.</p>

        {state !== 'Login' && <div className="border border-gray-300 px-4 py-3 flex items-center gap-3 rounded-md mb-4 focus-within:border-blue-500 focus-within:shadow-lg transition">
          <img src={assets_1.assets.profile_user} alt="User Icon" className="w-5 h-5"/>
          <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Full Name" required className="w-full bg-transparent outline-none placeholder:text-gray-400 text-gray-700"/>
        </div>}

        <div className="border border-gray-300 px-4 py-3 flex items-center gap-3 rounded-md mb-4 focus-within:border-blue-500 focus-within:shadow-lg transition">
          <img src={assets_1.assets.email_icon} alt="Email Icon" className="w-5 h-5"/>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email Address" required className="w-full bg-transparent outline-none placeholder:text-gray-400 text-gray-700"/>
        </div>

        <div className="border border-gray-300 px-4 py-3 flex items-center gap-3 rounded-md mb-6 focus-within:border-blue-500 focus-within:shadow-lg transition">
          <img src={assets_1.assets.lock_icon} alt="Lock Icon" className="w-5 h-5"/>
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="w-full bg-transparent outline-none placeholder:text-gray-400 text-gray-700"/>
        </div>

        <p className="text-sm text-blue-500 text-right mb-6 hover:underline cursor-pointer">Forgot password?</p>

        <button className="bg-blue-600 w-full text-white py-3 rounded-md font-medium hover:bg-blue-700 transition">
          {state === 'Login' ? 'login' : 'create account'}
        </button>

        {state === 'Login' ? <p className="mt-6 text-center text-sm">
          Don't have an account?{' '}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline" onClick={() => setState('Sign Up')}>Sign up</span>
        </p>
            :
                <p className="mt-6 text-center text-sm">
          Already have an account?{' '}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline" onClick={() => setState('Login')}>Login</span>
        </p>}

        <img onClick={() => setShowLogin(false)} src={assets_1.assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer'/>

      </framer_motion_1.motion.form>
    </div>);
};
exports.default = Login;
//# sourceMappingURL=Login.js.map