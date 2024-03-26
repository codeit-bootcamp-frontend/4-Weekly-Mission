"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Api_1 = require("../../apis/Api");
const Cards_1 = __importDefault(require("../Cards/Cards"));
const share_svg_1 = __importDefault(require("../../assets/share.svg"));
const pen_svg_1 = __importDefault(require("../../assets/pen.svg"));
const delete_svg_1 = __importDefault(require("../../assets/delete.svg"));
const add_svg_1 = __importDefault(require("../../assets/add.svg"));
const FolderItem_module_scss_1 = __importDefault(require("./FolderItem.module.scss"));
function FolderItem({ usersFolderData, searchKeyword }) {
    const [selectedFolder, setSelectedFolder] = (0, react_1.useState)({ id: 1, name: "전체" });
    const [cardList, setCardList] = (0, react_1.useState)([]);
    const folderList = [{ id: 1, name: "전체" }, ...usersFolderData];
    const handleFolderClick = (data) => {
        setSelectedFolder(data);
    };
    (0, react_1.useEffect)(() => {
        const getFolderData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const card = yield (0, Api_1.getUsersLink)(selectedFolder.name === "전체" ? "" : `?folderId=${selectedFolder.id}`);
                setCardList(card.data);
            }
            catch (error) {
                console.log(error);
            }
        });
        getFolderData();
    }, [selectedFolder]);
    return ((0, jsx_runtime_1.jsx)("div", { className: FolderItem_module_scss_1.default.FolderItem, children: (0, jsx_runtime_1.jsxs)("div", { className: FolderItem_module_scss_1.default.folderItemContainer, children: [(0, jsx_runtime_1.jsxs)("div", { className: FolderItem_module_scss_1.default.folderListBar, children: [(0, jsx_runtime_1.jsx)("div", { className: FolderItem_module_scss_1.default.folderList, children: folderList.map((data) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => handleFolderClick(data), className: selectedFolder.name === data.name
                                    ? FolderItem_module_scss_1.default.selectedFolder
                                    : FolderItem_module_scss_1.default.folderButton, children: data.name }, data.id))) }), (0, jsx_runtime_1.jsxs)("button", { className: FolderItem_module_scss_1.default.addFolder, children: [(0, jsx_runtime_1.jsx)("p", { children: "\uD3F4\uB354 \uCD94\uAC00" }), (0, jsx_runtime_1.jsx)("img", { src: add_svg_1.default, alt: "\uD3F4\uB354 \uCD94\uAC00" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: FolderItem_module_scss_1.default.optionBar, children: [(0, jsx_runtime_1.jsx)("h1", { className: FolderItem_module_scss_1.default.folderTitle, children: selectedFolder.name }), selectedFolder.name === "전체" ? ("") : ((0, jsx_runtime_1.jsxs)("div", { className: FolderItem_module_scss_1.default.optionList, children: [(0, jsx_runtime_1.jsxs)("button", { className: FolderItem_module_scss_1.default.option, children: [(0, jsx_runtime_1.jsx)("img", { src: share_svg_1.default, alt: "\uACF5\uC720" }), (0, jsx_runtime_1.jsx)("span", { children: "\uACF5\uC720" })] }), (0, jsx_runtime_1.jsxs)("button", { className: FolderItem_module_scss_1.default.option, children: [(0, jsx_runtime_1.jsx)("img", { src: pen_svg_1.default, alt: "\uC774\uB984 \uBCC0\uACBD" }), (0, jsx_runtime_1.jsx)("span", { children: "\uC774\uB984 \uBCC0\uACBD" })] }), (0, jsx_runtime_1.jsxs)("button", { className: FolderItem_module_scss_1.default.option, children: [(0, jsx_runtime_1.jsx)("img", { src: delete_svg_1.default, alt: "\uC0AD\uC81C" }), (0, jsx_runtime_1.jsx)("span", { children: "\uC0AD\uC81C" })] })] }))] }), (0, jsx_runtime_1.jsx)(Cards_1.default, { cardList: cardList, showStarKebab: true, searchKeyword: searchKeyword })] }) }));
}
exports.default = FolderItem;
