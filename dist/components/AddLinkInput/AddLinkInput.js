"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AddLinkInput_module_scss_1 = __importDefault(require("./AddLinkInput.module.scss"));
function AddLinkInput() {
    return ((0, jsx_runtime_1.jsx)("div", { className: AddLinkInput_module_scss_1.default.AddLinkInput, children: (0, jsx_runtime_1.jsxs)("div", { className: AddLinkInput_module_scss_1.default.inputContainer, children: [(0, jsx_runtime_1.jsx)("input", { className: AddLinkInput_module_scss_1.default.inputField, placeholder: "\uB9C1\uD06C\uB97C \uCD94\uAC00\uD574 \uBCF4\uC138\uC694" }), (0, jsx_runtime_1.jsx)("button", { className: AddLinkInput_module_scss_1.default.AddLinkBtn, children: "\uCD94\uAC00\uD558\uAE30" })] }) }));
}
exports.default = AddLinkInput;
