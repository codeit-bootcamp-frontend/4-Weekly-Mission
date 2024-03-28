"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const App_1 = __importDefault(require("./App"));
const HomePage_1 = __importDefault(require("./pages/HomePage/HomePage"));
const SharedPage_1 = __importDefault(require("./pages/SharedPage/SharedPage"));
const FolderPage_1 = __importDefault(require("./pages/FolderPage/FolderPage"));
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(App_1.default, {}),
        children: [
            {
                path: "",
                element: (0, jsx_runtime_1.jsx)(HomePage_1.default, {}),
            },
            {
                path: "shared",
                element: (0, jsx_runtime_1.jsx)(SharedPage_1.default, {}),
            },
            {
                path: "folder",
                element: (0, jsx_runtime_1.jsx)(FolderPage_1.default, {}),
            },
        ],
    },
]);
exports.default = router;
