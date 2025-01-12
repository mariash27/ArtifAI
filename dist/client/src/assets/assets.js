"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plans = exports.testimonialsData = exports.stepsData = exports.assets = void 0;
const logo_svg_1 = __importDefault(require("./logo.svg"));
const logo_icon_svg_1 = __importDefault(require("./logo_icon.svg"));
const facebook_icon_svg_1 = __importDefault(require("./facebook_icon.svg"));
const instagram_icon_svg_1 = __importDefault(require("./instagram_icon.svg"));
const twitter_icon_svg_1 = __importDefault(require("./twitter_icon.svg"));
const star_icon_svg_1 = __importDefault(require("./star_icon.svg"));
const rating_star_svg_1 = __importDefault(require("./rating_star.svg"));
const sample_img_1_png_1 = __importDefault(require("./sample_img_1.png"));
const sample_img_2_png_1 = __importDefault(require("./sample_img_2.png"));
const profile_img_1_png_1 = __importDefault(require("./profile_img_1.png"));
const profile_img_2_png_1 = __importDefault(require("./profile_img_2.png"));
const step_icon_1_svg_1 = __importDefault(require("./step_icon_1.svg"));
const step_icon_2_svg_1 = __importDefault(require("./step_icon_2.svg"));
const step_icon_3_svg_1 = __importDefault(require("./step_icon_3.svg"));
const email_icon_svg_1 = __importDefault(require("./email_icon.svg"));
const lock_icon_svg_1 = __importDefault(require("./lock_icon.svg"));
const cross_icon_svg_1 = __importDefault(require("./cross_icon.svg"));
const star_group_png_1 = __importDefault(require("./star_group.png"));
const credit_star_svg_1 = __importDefault(require("./credit_star.svg"));
const profile_icon_png_1 = __importDefault(require("./profile_icon.png"));
const profile_user_svg_1 = __importDefault(require("./profile_user.svg"));
const paypal_icon_svg_1 = __importDefault(require("./paypal_icon.svg"));
const mastercard_payment_icon_svg_1 = __importDefault(require("./mastercard_payment_icon.svg"));
const visa_icon_svg_1 = __importDefault(require("./visa_icon.svg"));
exports.assets = {
    logo: logo_svg_1.default,
    logo_icon: logo_icon_svg_1.default,
    facebook_icon: facebook_icon_svg_1.default,
    instagram_icon: instagram_icon_svg_1.default,
    twitter_icon: twitter_icon_svg_1.default,
    star_icon: star_icon_svg_1.default,
    rating_star: rating_star_svg_1.default,
    sample_img_1: sample_img_1_png_1.default,
    sample_img_2: sample_img_2_png_1.default,
    email_icon: email_icon_svg_1.default,
    lock_icon: lock_icon_svg_1.default,
    cross_icon: cross_icon_svg_1.default,
    star_group: star_group_png_1.default,
    credit_star: credit_star_svg_1.default,
    profile_icon: profile_icon_png_1.default,
    profile_user: profile_user_svg_1.default,
    paypal_icon: paypal_icon_svg_1.default,
    mastercard_payment_icon: mastercard_payment_icon_svg_1.default,
    visa_icon: visa_icon_svg_1.default
};
exports.stepsData = [
    {
        title: 'Describe Your Vision',
        description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
        icon: step_icon_1_svg_1.default,
    },
    {
        title: 'Watch the Magic',
        description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
        icon: step_icon_2_svg_1.default,
    },
    {
        title: 'Download & Share',
        description: 'Instantly download your creation or share it with the world directly from our platform.',
        icon: step_icon_3_svg_1.default,
    },
];
exports.testimonialsData = [
    {
        image: profile_img_1_png_1.default,
        name: 'Donald Jackman',
        role: 'Graphic Designer',
        stars: 5,
        text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image: profile_img_2_png_1.default,
        name: 'Richard Nelson',
        role: 'Content Creator',
        stars: 4,
        text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image: profile_img_1_png_1.default,
        name: 'Donald Jackman',
        role: ' Graphic Designer',
        stars: 5,
        text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
];
exports.plans = [
    {
        id: 'Basic',
        price: 10,
        credits: 100,
        desc: 'Best for personal use.'
    },
    {
        id: 'Advanced',
        price: 50,
        credits: 500,
        desc: 'Best for business use.'
    },
    {
        id: 'Business',
        price: 250,
        credits: 5000,
        desc: 'Best for enterprise use.'
    },
];
//# sourceMappingURL=assets.js.map