"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const facebook_svg_1 = __importDefault(require("../../assets/facebook.svg"));
const twitter_svg_1 = __importDefault(require("../../assets/twitter.svg"));
const youtube_svg_1 = __importDefault(require("../../assets/youtube.svg"));
const instagram_svg_1 = __importDefault(require("../../assets/instagram.svg"));
const Footer_module_scss_1 = __importDefault(require("./Footer.module.scss"));
function Footer() {
    const SNS_LIST = [
        {
            name: "Facebook",
            href: "https://www.facebook.com/",
            src: facebook_svg_1.default,
        },
        {
            name: "Twitter",
            href: "https://www.twitter.com/",
            src: twitter_svg_1.default,
        },
        {
            name: "Youtube",
            href: "https://www.youtube.com/",
            src: youtube_svg_1.default,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/",
            src: instagram_svg_1.default,
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: Footer_module_scss_1.default.Footer, children: [(0, jsx_runtime_1.jsx)("p", { className: Footer_module_scss_1.default.copyright, children: "\u00A9codeit - 2023" }), (0, jsx_runtime_1.jsxs)("div", { className: Footer_module_scss_1.default.footerLink, children: [(0, jsx_runtime_1.jsx)("p", { children: "Privacy Policy" }), (0, jsx_runtime_1.jsx)("p", { children: "FAQ" })] }), (0, jsx_runtime_1.jsx)("div", { className: Footer_module_scss_1.default.sns, children: SNS_LIST.map(({ name, href, src }) => ((0, jsx_runtime_1.jsx)("a", { href: href, children: (0, jsx_runtime_1.jsx)("img", { src: src, alt: name }) }, name))) })] }));
}
exports.default = Footer;
