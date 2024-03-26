"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function HomePage() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "\uD83C\uDF1DHomePage\uD83C\uDF1D" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/shared", children: "Shared" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/folder", children: "folder" })] }));
}
exports.default = HomePage;
