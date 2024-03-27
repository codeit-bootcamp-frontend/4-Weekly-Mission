import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import { Home } from "./pages/Home";
function Main() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/shared", element: _jsx(Shared, {}) }), _jsx(Route, { path: "/folder", element: _jsx(Folder, {}) })] }) }));
}
export default Main;
