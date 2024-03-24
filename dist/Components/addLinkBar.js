import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./AddLinkBar.css";
import linkIcon from "../../assets/linkIcon.svg";
import ModalAddFolder from "~/Components/Modal/ModalAddFolder.js";
import { useState } from "react";
var AddLink = function () {
    var _a = useState(false), showModal = _a[0], setShowModal = _a[1];
    var handleOpenModal = function (e) {
        e.preventDefault();
        setShowModal(true);
    };
    return (_jsx("div", { className: "addLinkContainer", children: _jsxs("form", { className: "addLinkForm", children: [_jsx("label", { htmlFor: "linkInput", className: "hiddenLabel", children: "\uB9C1\uD06C\uB97C \uCD94\uAC00\uD574\uBCF4\uC138\uC694." }), _jsx("img", { src: linkIcon, alt: "link icon" }), _jsx("input", { type: "text", id: "linkInput", placeholder: "\uB9C1\uD06C\uB97C \uCD94\uAC00\uD574 \uBCF4\uC138\uC694.", className: "addLinkInput" }), _jsx("button", { onClick: handleOpenModal, children: "\uCD94\uAC00\uD558\uAE30" }), showModal && (_jsx(ModalAddFolder, { isOpen: showModal, onClose: function () { return setShowModal(false); } }))] }) }));
};
export default AddLink;
