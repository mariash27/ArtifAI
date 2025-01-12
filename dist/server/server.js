"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongodb_js_1 = __importDefault(require("./config/mongodb.js"));
const userRoutes_js_1 = __importDefault(require("./routes/userRoutes.js"));
const imageRoutes_js_1 = __importDefault(require("./routes/imageRoutes.js"));
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
await (0, mongodb_js_1.default)();
app.use('/api/user', userRoutes_js_1.default);
app.use('/api/image', imageRoutes_js_1.default);
app.get('/', (req, res) => res.send("API Working"));
app.listen(PORT, () => console.log('Server running on port ' + PORT));
//# sourceMappingURL=server.js.map