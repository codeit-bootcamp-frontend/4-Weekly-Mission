import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../styles/CardKebab.css";
import { useShowModal } from "../useHooks/useShowModal";
import ModalAddToFolder from "./Modal/ModalAddToFolder";
import ModalDeleteLink from "./Modal/ModalDeleteLink";
export function CardKebab(_a) {
    var url = _a.url;
    var _b = useShowModal(), handleShowModal = _b.handleShowModal, showModal = _b.showModal, setShowModal = _b.setShowModal, clickValue = _b.clickValue;
    return (_jsxs("div", { className: "kebabBox", children: [_jsx("button", { className: "kebabDelete kebabBtn", onClick: handleShowModal, children: "\uC0AD\uC81C\uD558\uAE30" }), _jsx("button", { className: "kebabAddMyFolder kebabBtn", onClick: handleShowModal, children: "\uD3F4\uB354\uC5D0 \uCD94\uAC00" }), showModal && clickValue === "폴더에 추가" ? (_jsx(ModalAddToFolder, { isOpen: showModal, onClose: function () { return setShowModal(false); }, selectedFolderName: "내용 입력" })) : (_jsx(ModalDeleteLink, { isOpen: showModal, onClose: function () { return setShowModal(false); }, url: url }))] }));
}
