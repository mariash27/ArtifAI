"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const assets_1 = require("../assets/assets");
const Footer = () => {
    return (<div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets_1.assets.logo} alt="Logo" width={150}/>

        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500
         max-sm:hidden'>Copyright @GreatStack.dev | All rights reserved.</p>

        <div className='flex gap-2.5'>
            <img src={assets_1.assets.facebook_icon} alt=""/>
            <img src={assets_1.assets.instagram_icon} alt=""/>
            <img src={assets_1.assets.twitter_icon} alt=""/>
        </div>
      
    </div>);
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map