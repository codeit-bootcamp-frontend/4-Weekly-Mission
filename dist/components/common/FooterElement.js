import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import facebookIcon from "../../assets/icons/icon_facebook.png";
import twitterIcon from "../../assets/icons/icon_twitter.png";
import youtubeIcon from "../../assets/icons/icon_youtube.png";
import instagramIcon from "../../assets/icons/icon_instagram.png";
import "../../styles/common.css";
function FooterElement() {
    return (_jsx("footer", { children: _jsxs("div", { className: "footer-frame", children: [_jsx("div", { id: "footer-codeit", children: _jsx("p", { children: "@codeit - 2023" }) }), _jsxs("div", { id: "footer-notice", children: [_jsx("a", { href: "privacy.html", children: _jsx("p", { children: "Privacy Policy" }) }), _jsx("a", { href: "faq.html", children: _jsx("p", { children: "FAQ" }) })] }), _jsxs("div", { id: "footer-icons", children: [_jsx("a", { href: "https://www.facebook.com/", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: facebookIcon, alt: "facebook_icon" }) }), _jsx("a", { href: "https://twitter.com/", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: twitterIcon, alt: "twitter`_icon" }) }), _jsx("a", { href: "https://www.youtube.com/", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: youtubeIcon, alt: "youtube_icon" }) }), _jsx("a", { href: "https://www.instagram.com/", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: instagramIcon, alt: "instagram_icon" }) })] })] }) }));
}
export default FooterElement;
