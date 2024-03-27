"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KAKAO_SHARE_DATA = exports.ALL_LINKS_TEXT = exports.BUTTONS = exports.MODALS_ID = void 0;
exports.MODALS_ID = {
    addFolder: "addFolder",
    share: "share",
    rename: "rename",
    delete: "delete",
};
exports.BUTTONS = [
    {
        iconSource: "images/share.svg",
        text: "공유",
        modalId: exports.MODALS_ID.share,
    },
    {
        iconSource: "images/pen.svg",
        text: "이름 변경",
        modalId: exports.MODALS_ID.rename,
    },
    {
        iconSource: "images/trash.svg",
        text: "삭제",
        modalId: exports.MODALS_ID.delete,
    },
];
exports.ALL_LINKS_TEXT = "전체";
exports.KAKAO_SHARE_DATA = {
    title: "Linkbrary",
    description: "링크를 저장하고 공유하는 가장 쉬운 방법",
    imageUrl: "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
};
