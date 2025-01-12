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
exports.AppContext = void 0;
const react_1 = require("react");
const react_toastify_1 = require("react-toastify");
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
exports.AppContext = (0, react_1.createContext)();
const AppContextProvider = (props) => {
    const [user, setUser] = (0, react_1.useState)(null);
    const [showLogin, setShowLogin] = (0, react_1.useState)(false);
    const [token, setToken] = (0, react_1.useState)(localStorage.getItem('token'));
    const [credit, setCredit] = (0, react_1.useState)(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const loadCreditsData = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.get(backendUrl + '/api/user/credits', { headers: { token } });
            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            }
        }
        catch (error) {
            console.log(error);
            react_toastify_1.toast.error(error.message);
        }
    });
    const generateImage = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.post(backendUrl + '/api/image/generate-image', { prompt }, { headers: { token } });
            if (data.success) {
                loadCreditsData();
                return data.resultImage;
            }
            else {
                react_toastify_1.toast.error(data.message);
                loadCreditsData();
                if (data.creditBalance === 0) {
                    navigate('/buy');
                }
            }
        }
        catch (error) {
            react_toastify_1.toast / error(error.message);
        }
    });
    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
    };
    (0, react_1.useEffect)(() => {
        if (token) {
            loadCreditsData();
        }
    }, [token]);
    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit, loadCreditsData, logout, generateImage
    };
    return (<exports.AppContext.Provider value={value}>
            {props.children}

        </exports.AppContext.Provider>);
};
exports.default = AppContextProvider;
//# sourceMappingURL=AppContext.js.map