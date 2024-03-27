import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { getFromTime } from "../utils/getFromTime";
import favoriteIcon from "../images/favorite.svg";
import kebabIcon from "../images/kebab.svg";
import "../styles/folderCard.css";
import { CardKebab } from "./CardKebab";
var defaultImage = "https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-600nw-2079504220.jpg";
export function FolderCard(_a) {
    var cardInfo = _a.cardInfo;
    var image_source = cardInfo.image_source, created_at = cardInfo.created_at, description = cardInfo.description, url = cardInfo.url;
    var _b = useState(false), kebabToggle = _b[0], setKebabToggle = _b[1];
    //createdAtDate
    var date = new Date(created_at).toLocaleString();
    var createdAtDate = date
        .split("")
        .slice(0, date.indexOf("오") - 2)
        .join("");
    var src = image_source ? image_source : defaultImage;
    var alt = image_source ? "카드이미지" : "기본이미지";
    var handleClickKebab = function (e) {
        e.preventDefault();
        setKebabToggle(kebabToggle ? false : true);
    };
    return (_jsx(_Fragment, { children: _jsx("a", { href: url, children: _jsxs("div", { className: "card", children: [_jsxs("div", { className: "cardImgSource", children: [_jsx("img", { src: src, alt: alt, className: "cardImg" }), _jsxs("div", { children: [_jsx("img", { src: favoriteIcon, alt: "favorite icon", className: "favorite" }), _jsx("button", { onClick: handleClickKebab, children: _jsx("img", { src: kebabIcon, alt: "kebab icon", className: "kebab" }) }), kebabToggle && _jsx(CardKebab, { url: url })] })] }), _jsxs("div", { className: "cardContent", children: [_jsx("p", { className: "createdFrom", children: getFromTime(created_at) }), _jsx("p", { className: "description", children: description }), _jsx("p", { className: "createdAt", children: createdAtDate })] })] }) }) }));
}
