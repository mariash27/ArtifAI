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
exports.generateImage = void 0;
const axios_1 = __importDefault(require("axios"));
const userModel_js_1 = __importDefault(require("../models/userModel.js"));
const form_data_1 = __importDefault(require("form-data"));
const generateImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, prompt } = req.body;
        const user = yield userModel_js_1.default.findById(userId);
        if (!user || !prompt) {
            return res.json({ success: false, message: 'Missing Details' });
        }
        if (user.creditBalance === 0 || userModel_js_1.default.creditBalance < 0) {
            return res.json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance });
        }
        const formData = new form_data_1.default();
        formData.append('prompt', prompt);
        const { data } = yield axios_1.default.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API
            },
            responseType: 'arraybuffer'
        });
        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;
        yield userModel_js_1.default.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });
        res.json({ success: true, message: "Image Generated", creditBalance: user.creditBalance - 1, resultImage });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
});
exports.generateImage = generateImage;
//# sourceMappingURL=imageController.js.map