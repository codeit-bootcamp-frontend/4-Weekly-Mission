"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Header.css");
function Header({ folderData }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "Header", children: [(0, jsx_runtime_1.jsxs)("div", { className: "headerProfileBox", children: [(0, jsx_runtime_1.jsx)("img", { className: "headerProfileImg", src: folderData.profileImg, alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0" }), (0, jsx_runtime_1.jsxs)("p", { className: "profileName", children: ["@", folderData.profileName] })] }), (0, jsx_runtime_1.jsx)("h1", { className: "folderName", children: folderData.folderName })] }));
}
exports.default = Header;
