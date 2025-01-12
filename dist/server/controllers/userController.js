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
exports.processPayment = exports.userCredits = exports.loginUser = exports.registerUser = void 0;
const userModel_js_1 = __importDefault(require("../models/userModel.js"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' });
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const userData = {
            name,
            email,
            password: hashedPassword
        };
        const newUser = new userModel_js_1.default(userData);
        const user = yield newUser.save();
        const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ success: true, token, user: { name: user.name } });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel_js_1.default.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'User does not exist' });
        }
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
        if (isMatch) {
            const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET);
            res.json({ success: true, token, user: { name: user.name } });
        }
        else {
            return res.json({ success: false, message: 'Invalid credentials' });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
});
exports.loginUser = loginUser;
const userCredits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const user = yield userModel_js_1.default.findById(userId);
        res.json({ success: true, credits: user.creditBalance, user: { name: user.name } });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
});
exports.userCredits = userCredits;
const processPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, credits } = req.body; // Сумма, которую передает клиент
        const userId = req.body.userId; // userId из middleware
        // Проверка пользователя
        const user = yield userModel_js_1.default.findById(userId);
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }
        // Валидация суммы (должна быть положительной)
        if (!amount || amount <= 0) {
            return res.json({ success: false, message: 'Invalid amount' });
        }
        // Обновление баланса пользователя
        user.creditBalance += credits; // Добавляем сумму к балансу
        yield user.save();
        res.json({ success: true, message: 'Payment successful', newBalance: user.creditBalance });
    }
    catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Internal Server Error' });
    }
});
exports.processPayment = processPayment;
//# sourceMappingURL=userController.js.map