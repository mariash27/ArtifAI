"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("react-dom/client");
require("./index.css");
const App_jsx_1 = __importDefault(require("./App.jsx"));
const react_router_dom_1 = require("react-router-dom");
const AppContext_jsx_1 = __importDefault(require("./context/AppContext.jsx"));
(0, client_1.createRoot)(document.getElementById('root')).render(<react_router_dom_1.BrowserRouter>
    <AppContext_jsx_1.default>
      <App_jsx_1.default />
    </AppContext_jsx_1.default>
  </react_router_dom_1.BrowserRouter>);
//# sourceMappingURL=main.js.map