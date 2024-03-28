"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Gnb_1 = __importDefault(require("./components/Gnb/Gnb"));
const Footer_1 = __importDefault(require("./components/Footer/Footer"));
function App() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Gnb_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = App;
