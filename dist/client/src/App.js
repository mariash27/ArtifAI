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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./pages/Home"));
const Result_1 = __importDefault(require("./pages/Result"));
const ByuCredit_1 = __importDefault(require("./pages/ByuCredit"));
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Footer_1 = __importDefault(require("./components/Footer"));
const Login_1 = __importDefault(require("./components/Login"));
const AppContext_1 = require("./context/AppContext");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const App = () => {
    const { showLogin } = (0, react_1.useContext)(AppContext_1.AppContext);
    return (<div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <react_toastify_1.ToastContainer position='bottom-right'/>
      <Navbar_1.default />
      {showLogin && <Login_1.default />}
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path='/' element={<Home_1.default />}/>
        <react_router_dom_1.Route path='/result' element={<Result_1.default />}/>
        <react_router_dom_1.Route path='/buy' element={<ByuCredit_1.default />}/>
      </react_router_dom_1.Routes>
      <Footer_1.default />
    </div>);
};
exports.default = App;
//# sourceMappingURL=App.js.map