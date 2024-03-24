import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FolderPage } from "./Pages/FolderPage";
import { SharedPage } from "./Pages/SharedPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "./Pages/IndexPage";
function App() {
    return (_jsx(_Fragment, { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(IndexPage, {}) }), _jsx(Route, { path: "/shared", element: _jsx(SharedPage, {}) }), _jsx(Route, { path: "/folder", element: _jsx(FolderPage, {}) })] }) }) }));
}
export default App;
