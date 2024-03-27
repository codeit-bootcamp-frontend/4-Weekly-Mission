import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Modal from "react-modal";
import closeIcon from "../../images/close.svg";
import "../../styles/Modal.css";
var ModalContainer = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children;
    var defaultStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 15,
        },
    };
    return (_jsx(Modal, { isOpen: isOpen, onRequestClose: onClose, style: defaultStyles, children: _jsxs("div", { className: "modalBox", children: [_jsx("img", { src: closeIcon, alt: "\uB2EB\uAE30\uBC84\uD2BC", className: "closeIcon", onClick: onClose }), children] }) }));
};
export default ModalContainer;
