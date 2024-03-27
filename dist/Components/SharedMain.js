import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import searchIcon from "../images/search.svg";
import { Card } from "./Card";
export function SharedMain(_a) {
    var cards = _a.cards;
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "mainArea", children: [_jsxs("div", { className: "searchArea", children: [_jsx("input", { className: "searchInput", placeholder: "\uB9C1\uD06C\uB97C \uAC80\uC0C9\uD574 \uBCF4\uC138\uC694." }), _jsx("div", { className: "searchIcon", children: _jsx("img", { src: searchIcon, alt: "search", className: "searchImg" }) })] }), _jsx("div", { className: "cardGrid", children: cards &&
                        cards.map(function (card) { return (_jsx(Card, { cardInfo: card.cardInfo }, card.id)); }) })] }) }));
}
