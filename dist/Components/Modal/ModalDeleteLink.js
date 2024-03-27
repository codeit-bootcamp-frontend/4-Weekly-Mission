import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ModalContainer from "./ModalContainer";
var ModalDeleteLink = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, url = _a.url;
    var deleteLinkContent = (_jsxs(_Fragment, { children: [_jsx("h2", { className: "title", children: "\uB9C1\uD06C \uC0AD\uC81C" }), _jsx("p", { children: url }), _jsx("button", { className: "redButton", children: "\uC0AD\uC81C\uD558\uAE30" })] }));
    return (_jsx(ModalContainer, { isOpen: isOpen, onClose: onClose, children: deleteLinkContent }));
};
export default ModalDeleteLink;
