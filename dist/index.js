"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
const react_router_dom_1 = require("react-router-dom");
const Router_1 = __importDefault(require("./Router"));
require("./styles/_base.scss");
const root = client_1.default.createRoot(document.getElementById("root"));
root.render((0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: Router_1.default }));
