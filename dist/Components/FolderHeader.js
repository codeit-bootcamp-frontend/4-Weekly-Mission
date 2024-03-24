import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import logo from "../images/logo.svg";
import linkIcon from "../images/link.svg";
import ModalAddToFolder from "./Modal/ModalAddToFolder";
import { useShowModal } from "../useHooks/useShowModal";
export function FolderHeader(_a) {
    var profile = _a.profile;
    var _b = useShowModal(), handleShowModal = _b.handleShowModal, showModal = _b.showModal, setShowModal = _b.setShowModal;
    return (_jsx(_Fragment, { children: _jsx("header", { className: "headerArea", children: _jsxs("nav", { children: [_jsxs("div", { className: "navBar", children: [_jsx("a", { href: "index.html", children: _jsx("img", { src: logo, alt: "logo", className: "logo" }) }), (profile === null || profile === void 0 ? void 0 : profile.email) ? (_jsxs("div", { className: "profile", children: [_jsx("img", { src: profile.image || "", alt: "userProfileImg", className: "profileImg" }), _jsx("span", { className: "userEmail", children: profile.email })] })) : (_jsx("a", { href: "../Pages/signIn.html", className: "btn btnS", children: "\uB85C\uADF8\uC778" }))] }), _jsx("form", { children: _jsxs("div", { className: "linkInputArea", children: [_jsx("input", { placeholder: "\uB9C1\uD06C\uB97C \uCD94\uAC00\uD574 \uBCF4\uC138\uC694", className: "addLinks" }), _jsx("img", { src: linkIcon, alt: "link icon", className: "linkIcon" }), _jsx("button", { className: "addBtn", onClick: handleShowModal, children: "\uCD94\uAC00\uD558\uAE30" }), showModal && (_jsx(ModalAddToFolder, { isOpen: showModal, onClose: function () { return setShowModal(false); } }))] }) })] }) }) }));
}
