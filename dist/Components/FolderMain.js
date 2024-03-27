import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import searchIcon from "../images/search.svg";
import { FolderCard } from "./FolderCard";
import { FolderMenu } from "./FolderMenu";
import { HandleFolder } from "./HandleFolder";
import { useFolder } from "../useHooks/useFolder";
import { useLinks } from "../useHooks/useLinks";
export function FolderMain() {
    var _a = useFolder(), currentMenu = _a.currentMenu, setCurrentMenu = _a.setCurrentMenu;
    var _b = useLinks(), handleLinks = _b.handleLinks, links = _b.links;
    var _c = useState(), folderCurrentId = _c[0], setFolderCurrentId = _c[1];
    var handleMenuChange = function (newMenu, id) {
        setCurrentMenu(newMenu);
        handleLinks(id);
        setFolderCurrentId(id);
    };
    return (_jsx(_Fragment, { children: _jsxs("main", { className: "mainArea", children: [_jsxs("form", { className: "searchArea", children: [_jsx("input", { className: "searchInput", placeholder: "\uB9C1\uD06C\uB97C \uAC80\uC0C9\uD574 \uBCF4\uC138\uC694." }), _jsx("img", { src: searchIcon, alt: "search", className: "searchImg" })] }), _jsx(FolderMenu, { onMenuChange: handleMenuChange }), _jsxs("div", { className: "titleBar", children: [_jsx("div", { className: "title", children: currentMenu }), currentMenu !== "전체" && _jsx(HandleFolder, { id: folderCurrentId })] }), links && links.length ? (_jsx("div", { className: "cardGrid", children: links.map(function (card) { return (_jsx(FolderCard, { cardInfo: card }, card.id)); }) })) : (_jsx("div", { className: "noLink", children: "\uC800\uC7A5\uB41C \uB9C1\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." }))] }) }));
}
