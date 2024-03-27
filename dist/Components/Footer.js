import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import instagram from '../images/instagram.svg';
export function Footer() {
    return (_jsx(_Fragment, { children: _jsx("footer", { children: _jsxs("div", { className: "footerBox", children: [_jsx("div", { className: "copyRight", children: "\u00A9codeit - 2023" }), _jsxs("div", { className: "links", children: [_jsx("a", { href: "/privacy", className: "link", children: "Privacy Policy" }), _jsx("a", { href: "/faq", className: "link", children: "FAQ" })] }), _jsxs("div", { className: "sns", children: [_jsx("a", { href: "#", target: "_blank", children: _jsx("img", { src: facebook, alt: "facebook" }) }), _jsx("a", { href: "#", target: "_blank", children: _jsx("img", { src: twitter, alt: "twitter" }) }), _jsx("a", { href: "#", target: "_blank", children: _jsx("img", { src: youtube, alt: "youtube" }) }), _jsx("a", { href: "#", target: "_blank", children: _jsx("img", { src: instagram, alt: "instagram" }) })] })] }) }) }));
}
