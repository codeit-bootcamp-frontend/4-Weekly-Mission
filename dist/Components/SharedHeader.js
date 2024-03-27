import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import logo from "../images/logo.svg";
export function SharedHeader(_a) {
    var profile = _a.profile, folder = _a.folder;
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "headerArea", children: [_jsx("nav", { children: _jsxs("div", { className: "navBar", children: [_jsx("a", { href: "index.html", children: _jsx("img", { src: logo, alt: "logo", className: "logo" }) }), (profile === null || profile === void 0 ? void 0 : profile.email) ? (_jsxs("div", { className: "profile", children: [_jsx("img", { src: profile.image || "", alt: "userProfileImg", className: "profileImg" }), _jsx("span", { className: "userEmail", children: profile.email })] })) : (_jsx("a", { href: "../Pages/signIn.html", className: "btn btnS", children: "\uB85C\uADF8\uC778" }))] }) }), _jsx("header", { children: _jsxs("div", { className: "folderProfile", children: [_jsx("img", { src: (folder === null || folder === void 0 ? void 0 : folder.profileImage) || "", alt: "\uD3F4\uB354\uC18C\uC720\uC790\uD504\uB85C\uD544\uC0AC\uC9C4", className: "folderImg" }), _jsx("p", { className: "folderProfileName", children: folder === null || folder === void 0 ? void 0 : folder.profileName }), _jsx("h2", { className: "folderName", children: folder === null || folder === void 0 ? void 0 : folder.folderName })] }) })] }) }));
}
