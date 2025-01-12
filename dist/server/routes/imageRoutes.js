"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageController_js_1 = require("../controllers/imageController.js");
const auth_js_1 = __importDefault(require("../middlewares/auth.js"));
const imageRouter = express_1.default.Router();
imageRouter.post('/generate-image', auth_js_1.default, imageController_js_1.generateImage);
exports.default = imageRouter;
//# sourceMappingURL=imageRoutes.js.map