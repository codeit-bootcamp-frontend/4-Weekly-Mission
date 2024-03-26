"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const Utilities_1 = require("../../utils/Utilities");
const Modal_1 = __importDefault(require("../modal/Modal"));
const star_svg_1 = __importDefault(require("../../assets/star.svg"));
const checkedstar_svg_1 = __importDefault(require("../../assets/checkedstar.svg"));
const kebab_svg_1 = __importDefault(require("../../assets/kebab.svg"));
const noimage_jpeg_1 = __importDefault(require("../../assets/noimage.jpeg"));
const Cards_module_scss_1 = __importDefault(require("./Cards.module.scss"));
function Cards({ cardList, showStarKebab, searchKeyword }) {
    const isListEmpty = cardList.length === 0;
    const [popoverShow, setPopoverShow] = (0, react_1.useState)(false);
    const [starClick, setStarClick] = (0, react_1.useState)(false);
    const [deleteModalShow, setDeleteModalShow] = (0, react_1.useState)(false);
    const [selectedData, setSelectedData] = (0, react_1.useState)({ url: "" });
    if (isListEmpty) {
        return ((0, jsx_runtime_1.jsx)("div", { className: Cards_module_scss_1.default.noLink, children: (0, jsx_runtime_1.jsx)("p", { children: "\uC800\uC7A5\uB41C \uB9C1\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4" }) }));
    }
    const cards = cardList.map((card) => (Object.assign({ imageSource: card.imageSource || card.image_source, createdAt: card.createdAt || card.created_at }, card)));
    const filteredCards = searchKeyword && searchKeyword.length > 0
        ? cards.filter((data) => (data.url || "")
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) ||
            (data.title || "")
                .toLowerCase()
                .includes(searchKeyword.toLowerCase()) ||
            (data.description || "")
                .toLowerCase()
                .includes(searchKeyword.toLowerCase()))
        : cards;
    const handleKebabClick = (e, data) => {
        e.preventDefault();
        setSelectedData(data);
        setPopoverShow(!popoverShow);
    };
    const handleStarClick = (e) => {
        e.preventDefault();
        setStarClick(!starClick);
    };
    const handleModal = () => {
        setDeleteModalShow(!deleteModalShow);
        if (!deleteModalShow) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    };
    console.log(selectedData);
    return ((0, jsx_runtime_1.jsxs)("div", { className: Cards_module_scss_1.default.Cards, children: [(0, jsx_runtime_1.jsx)("div", { className: Cards_module_scss_1.default.cardItemBox, children: filteredCards.map((data) => ((0, jsx_runtime_1.jsxs)("a", { href: data.url, className: Cards_module_scss_1.default.cardItem, target: "_blank", children: [(0, jsx_runtime_1.jsxs)("div", { className: Cards_module_scss_1.default.imgBox, children: [(0, jsx_runtime_1.jsx)("img", { className: Cards_module_scss_1.default.cardImg, src: data.imageSource || noimage_jpeg_1.default, alt: "\uB9C1\uD06C \uB300\uD45C \uC774\uBBF8\uC9C0" }), showStarKebab && ((0, jsx_runtime_1.jsx)("button", { className: Cards_module_scss_1.default.starBtn, onClick: handleStarClick, children: (0, jsx_runtime_1.jsx)("img", { src: starClick ? checkedstar_svg_1.default : star_svg_1.default, alt: "star" }) }))] }), (0, jsx_runtime_1.jsxs)("div", { className: Cards_module_scss_1.default.descriptionBox, children: [(0, jsx_runtime_1.jsxs)("div", { className: Cards_module_scss_1.default.timeAndKebab, children: [(0, jsx_runtime_1.jsx)("p", { className: Cards_module_scss_1.default.cardTime, children: (0, Utilities_1.getTimeAgo)(data.createdAt) }), showStarKebab && ((0, jsx_runtime_1.jsx)(react_bootstrap_1.OverlayTrigger, { trigger: "click", placement: "bottom-start", overlay: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Popover, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: Cards_module_scss_1.default.kebabPopover, onClick: handleModal, children: "\uC0AD\uC81C\uD558\uAE30" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: Cards_module_scss_1.default.kebabPopover, children: "\uD3F4\uB354\uC5D0 \uCD94\uAC00" })] }), children: (0, jsx_runtime_1.jsx)("button", { className: Cards_module_scss_1.default.kebabBtn, onClick: (e) => handleKebabClick(e, data), children: (0, jsx_runtime_1.jsx)("img", { src: kebab_svg_1.default, alt: "kebab" }) }) }))] }), (0, jsx_runtime_1.jsxs)("p", { className: Cards_module_scss_1.default.description, children: [data.title, (0, jsx_runtime_1.jsx)("br", {}), data.description] }), (0, jsx_runtime_1.jsx)("p", { className: Cards_module_scss_1.default.cardDate, children: new Date(data.createdAt).toLocaleDateString() })] })] }, data.id))) }), deleteModalShow && ((0, jsx_runtime_1.jsx)(Modal_1.default, { onClose: handleModal, title: "링크 삭제", data: selectedData.url, hasInput: false, hasBtn: true, btnTitle: "삭제하기" }))] }));
}
exports.default = Cards;
