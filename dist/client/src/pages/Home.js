"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("../components/Header"));
const Steps_1 = __importDefault(require("../components/Steps"));
const Description_1 = __importDefault(require("../components/Description"));
const Testimonials_1 = __importDefault(require("../components/Testimonials"));
const GenerateBtn_1 = __importDefault(require("../components/GenerateBtn"));
const Home = () => {
    return (<div>
      <Header_1.default />
      <Steps_1.default />
      <Description_1.default />
      <Testimonials_1.default />
      <GenerateBtn_1.default />
    </div>);
};
exports.default = Home;
//# sourceMappingURL=Home.js.map