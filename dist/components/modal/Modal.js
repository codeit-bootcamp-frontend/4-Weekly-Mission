"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
require("./modal.css");
const Modal = ({ onClose, title, data, hasBtn, btnTitle, hasInput }) => {
    return ((0, jsx_runtime_1.jsx)(Background, { children: (0, jsx_runtime_1.jsxs)(Content, { children: [(0, jsx_runtime_1.jsx)("h1", { className: "modalTitle", children: title }), hasInput ? (0, jsx_runtime_1.jsx)("input", {}) : (0, jsx_runtime_1.jsx)("p", { className: "modalTargetData", children: data }), hasBtn ? (0, jsx_runtime_1.jsx)("button", { className: "modalDeleteBtn", children: btnTitle }) : "", (0, jsx_runtime_1.jsx)("img", { className: "close", src: "https://weekly-mission-week9.vercel.app/images/close.svg", alt: "close", onClick: onClose })] }) }));
};
exports.default = Modal;
const Background = styled_components_1.default.div `
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  z-index: 3;
`;
const Content = styled_components_1.default.div `
  width: 360px;
  height: 239px;
  flex-shrink: 0;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  box-sizing: border-box;
`;
