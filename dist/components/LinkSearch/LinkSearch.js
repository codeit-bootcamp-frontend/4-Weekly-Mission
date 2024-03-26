"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Search_svg_1 = __importDefault(require("../../assets/Search.svg"));
require("./LinkSearch.css");
function LinkSearch({ value, onChange, onReset, inputRef }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "LinkSearch", children: [(0, jsx_runtime_1.jsxs)("div", { className: "inputBox", children: [(0, jsx_runtime_1.jsx)("input", { className: "linkSearchInput", value: value, onChange: onChange, placeholder: "\uB9C1\uD06C\uB97C \uAC80\uC0C9\uD574 \uBCF4\uC138\uC694.", ref: inputRef }), (0, jsx_runtime_1.jsx)("button", { className: "searchBtn", children: (0, jsx_runtime_1.jsx)("img", { src: Search_svg_1.default, alt: "search" }) }), value && ((0, jsx_runtime_1.jsx)("img", { className: "delete", src: "https://weekly-mission-week9.vercel.app/images/close.svg", alt: "delete", onClick: onReset }))] }), value && ((0, jsx_runtime_1.jsxs)("h1", { className: "searchResultText", children: [(0, jsx_runtime_1.jsx)("span", { className: "searchValue", children: value }), "\uC73C\uB85C \uAC80\uC0C9\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4."] }))] }));
}
exports.default = LinkSearch;
