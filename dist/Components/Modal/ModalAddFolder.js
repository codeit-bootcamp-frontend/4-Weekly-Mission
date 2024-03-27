import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ModalContainer from "./ModalContainer";
var ModalAddFolder = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, selectedFolderName = _a.selectedFolderName;
    var addContent = (_jsxs(_Fragment, { children: [_jsx("h2", { className: "title", children: "\uD3F4\uB354 \uCD94\uAC00" }), _jsx("input", { placeholder: selectedFolderName, className: "modalInput" }), _jsx("button", { className: "blueButton", children: "\uCD94\uAC00\uD558\uAE30" })] }));
    return (_jsx(ModalContainer, { isOpen: isOpen, onClose: onClose, children: addContent }));
};
export default ModalAddFolder;
