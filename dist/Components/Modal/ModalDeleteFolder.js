import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ModalContainer from "./ModalContainer";
var ModalDeleteFolder = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, currentMenu = _a.currentMenu;
    var deleteFolderContent = (_jsxs(_Fragment, { children: [_jsx("h2", { className: "title", children: "\uD3F4\uB354 \uC0AD\uC81C" }), _jsx("p", { children: currentMenu }), _jsx("button", { className: "redButton", children: "\uC0AD\uC81C\uD558\uAE30" })] }));
    return (_jsx(ModalContainer, { isOpen: isOpen, onClose: onClose, children: deleteFolderContent }));
};
export default ModalDeleteFolder;
