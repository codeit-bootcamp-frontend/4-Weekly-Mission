import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { getFromTime } from "../utils/getFromTime";
var defaultImage = "https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-600nw-2079504220.jpg";
export function Card(_a) {
    var cardInfo = _a.cardInfo;
    var imageSource = cardInfo.imageSource, createdAt = cardInfo.createdAt, description = cardInfo.description, url = cardInfo.url;
    //createdAtDate
    var date = new Date(createdAt).toLocaleString();
    var createdAtDate = date
        .split("")
        .slice(0, date.indexOf("오") - 2)
        .join("");
    var src = imageSource ? imageSource : defaultImage;
    var alt = imageSource ? "카드이미지" : "기본이미지";
    return (_jsx(_Fragment, { children: _jsx("a", { href: url, children: _jsxs("div", { className: "card", children: [_jsx("div", { className: "cardImgSource", children: _jsx("img", { src: src, alt: alt, className: "cardImg" }) }), _jsxs("div", { className: "cardContent", children: [_jsx("p", { className: "createdFrom", children: getFromTime(createdAt) }), _jsx("p", { className: "description", children: description }), _jsx("p", { className: "createdAt", children: createdAtDate })] })] }) }) }));
}
