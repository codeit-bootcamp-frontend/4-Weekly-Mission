"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = __importDefault(require("react-dom"));
const ModalPortal = ({ children }) => {
    const el = document.getElementById("modal");
    return react_dom_1.default.createPortal(children, el);
};
exports.default = ModalPortal;
