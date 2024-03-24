import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "../styles/folderMenu.css";
import { useFolderNames } from "../useHooks/useFolderNames";
import { Button } from "./Button";
import { useShowModal } from "../useHooks/useShowModal";
import ModalAddFolder from "./Modal/ModalAddFolder";
export function FolderMenu(_a) {
    var onMenuChange = _a.onMenuChange;
    var folderNames = useFolderNames().folderNames;
    var _b = useShowModal(), handleShowModal = _b.handleShowModal, showModal = _b.showModal, setShowModal = _b.setShowModal;
    var sendMenu = function (e, id) {
        var target = e.target;
        var newMenu = target.textContent;
        if (!newMenu)
            return;
        onMenuChange(newMenu, id);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "folderMenu", children: [_jsxs("div", { children: [_jsx(Button, { folderName: "전체", onClick: function (e) { return sendMenu(e); } }), folderNames &&
                            folderNames.length &&
                            folderNames.map(function (_a) {
                                var name = _a.name, id = _a.id;
                                return (_jsx(Button, { folderName: name, onClick: function (e) { return sendMenu(e, id); } }, id));
                            })] }), _jsx("button", { className: "add", onClick: handleShowModal, children: "\uD3F4\uB354 \uCD94\uAC00 +" }), showModal && (_jsx(ModalAddFolder, { isOpen: showModal, onClose: function () { return setShowModal(false); }, selectedFolderName: "내용 입력" }))] }) }));
}
