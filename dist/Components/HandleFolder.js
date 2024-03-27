import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import shareIcon from "../images/sharewindow.svg";
import changeIcon from "../images/change.svg";
import deleteIcon from "../images/delete.svg";
import "../styles/handleFolder.css";
import ModalEdit from "./Modal/ModalEdit";
import { useShowModal } from "../useHooks/useShowModal";
import ModalShare from "./Modal/ModalShare";
import ModalDeleteFolder from "./Modal/ModalDeleteFolder";
import { useFolder } from "../useHooks/useFolder";
export function HandleFolder(_a) {
    var id = _a.id;
    var _b = useShowModal(), handleShowModal = _b.handleShowModal, showModal = _b.showModal, setShowModal = _b.setShowModal, clickValue = _b.clickValue;
    var currentMenu = useFolder().currentMenu;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "handle", children: [_jsxs("button", { className: "icon", onClick: handleShowModal, children: [_jsx("img", { src: shareIcon, alt: "\uACF5\uC720 \uC544\uC774\uCF58" }), "\uACF5\uC720"] }), _jsxs("button", { className: "icon", onClick: handleShowModal, children: [_jsx("img", { src: changeIcon, alt: "\uC774\uB984\uBCC0\uACBD \uC544\uC774\uCF58" }), "\uC774\uB984 \uBCC0\uACBD"] }), _jsxs("button", { className: "icon", onClick: handleShowModal, children: [_jsx("img", { src: deleteIcon, alt: "\uC0AD\uC81C \uC544\uC774\uCF58" }), "\uC0AD\uC81C"] })] }), showModal && clickValue === "공유" ? (_jsx(ModalShare, { isOpen: showModal, onClose: function () { return setShowModal(false); }, currentMenu: currentMenu, currentFolderId: id })) : showModal && clickValue === "이름 변경" ? (_jsx(ModalEdit, { isOpen: showModal, onClose: function () { return setShowModal(false); }, selectedFolderName: "유용한 팁" })) : (_jsx(ModalDeleteFolder, { isOpen: showModal, onClose: function () { return setShowModal(false); }, currentMenu: currentMenu }))] }));
}
