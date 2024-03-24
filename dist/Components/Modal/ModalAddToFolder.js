import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ModalContainer from "./ModalContainer";
import { useFolder } from "../../useHooks/useFolder";
var ModalAddToFolder = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, selectedFolderName = _a.selectedFolderName;
    var folder = useFolder().folder;
    var addFolderContent = (_jsxs(_Fragment, { children: [_jsx("h2", { className: "title", children: "\uD3F4\uB354\uC5D0 \uCD94\uAC00" }), _jsx("div", { className: "menuLists", children: folder &&
                    folder.map(function (eachFolder) { return (_jsxs("div", { className: "menuList", children: [eachFolder.name, _jsxs("p", { children: [eachFolder.link.count, "\uAC1C \uB9C1\uD06C"] })] })); }) }), _jsx("button", { className: "blueButton", children: "\uCD94\uAC00\uD558\uAE30" })] }));
    return (_jsx(ModalContainer, { isOpen: isOpen, onClose: onClose, children: addFolderContent }));
};
export default ModalAddToFolder;
