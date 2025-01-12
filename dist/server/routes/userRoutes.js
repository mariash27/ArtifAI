"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_js_1 = require("../controllers/userController.js");
const auth_js_1 = __importDefault(require("../middlewares/auth.js"));
const userRouter = express_1.default.Router();
userRouter.post('/register', userController_js_1.registerUser);
userRouter.post('/login', userController_js_1.loginUser);
userRouter.get('/credits', auth_js_1.default, userController_js_1.userCredits);
userRouter.post('/payment', auth_js_1.default, userController_js_1.processPayment);
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map