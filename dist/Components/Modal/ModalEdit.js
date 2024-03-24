import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ModalContainer from "./ModalContainer";
var ModalEdit = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, selectedFolderName = _a.selectedFolderName;
    var editContent = (_jsxs(_Fragment, { children: [_jsx("h2", { className: "title", children: "\uD3F4\uB354 \uC774\uB984 \uBCC0\uACBD" }), _jsx("input", { placeholder: selectedFolderName, className: "modalInput" }), _jsx("button", { className: "blueButton", children: "\uBCC0\uACBD\uD558\uAE30" })] }));
    return (_jsx(ModalContainer, { isOpen: isOpen, onClose: onClose, children: editContent }));
};
export default ModalEdit;
