import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import kakao from "../../images/shareKakao.svg";
import facebook from "../../images/shareFacebook.svg";
import link from "../../images/shareLink.svg";
import ModalContainer from "./ModalContainer";
import { handleClipBoard } from "../../utils/handleClipBoard";
import { shareToFacebook } from "../../utils/shareToFacebook";
import { useKakaoShare } from "../../useHooks/useKakaoShare";
var ModalShare = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, currentMenu = _a.currentMenu, currentFolderId = _a.currentFolderId;
    var shareKakao = useKakaoShare(currentFolderId).shareKakao;
    var urlBaseLink = "http://localhost:3000/shared/";
    var handleCopyLink = function () {
        handleClipBoard("".concat(urlBaseLink).concat(currentFolderId));
    };
    var shareContent = (_jsxs(_Fragment, { children: [_jsx("h2", { className: "title", children: "\uD3F4\uB354 \uACF5\uC720" }), _jsx("p", { children: currentMenu }), _jsxs("div", { className: "socialButtonContainer", children: [_jsxs("div", { className: "snsButton", onClick: function () { return shareKakao(); }, children: [_jsx("img", { src: kakao, alt: "kakao" }), "\uCE74\uCE74\uC624\uD1A1"] }), _jsxs("div", { className: "snsButton", onClick: function () {
                            shareToFacebook("".concat(urlBaseLink).concat(currentFolderId));
                        }, children: [_jsx("img", { src: facebook, alt: "facebook" }), "\uD398\uC774\uC2A4\uBD81"] }), _jsxs("div", { className: "snsButton", onClick: handleCopyLink, children: [_jsx("img", { src: link, alt: "link" }), "\uB9C1\uD06C \uBCF5\uC0AC"] })] })] }));
    return (_jsx(ModalContainer, { isOpen: isOpen, onClose: onClose, children: shareContent }));
};
export default ModalShare;
