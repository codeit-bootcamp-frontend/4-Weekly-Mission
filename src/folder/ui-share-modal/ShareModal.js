"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareModal = void 0;
const ShareModal_module_scss_1 = __importDefault(require("./ShareModal.module.scss"));
const bind_1 = __importDefault(require("classnames/bind"));
const ui_modal_1 = require("sharing/ui-modal");
const ui_modal_content_box_1 = require("sharing/ui-modal-content-box");
const ui_modal_content_description_1 = require("sharing/ui-modal-content-description");
const ui_modal_content_title_1 = require("sharing/ui-modal-content-title");
const kakao_svg_1 = require("./kakao.svg");
const facebook_svg_1 = require("./facebook.svg");
const link_svg_1 = require("./link.svg");
const cx = bind_1.default.bind(ShareModal_module_scss_1.default);
const ShareModal = ({ isOpen, folderName, onKakaoClick, onFacebookClick, onLinkCopyClick, onCloseClick, onKeyDown, }) => {
    return (<ui_modal_1.Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ui_modal_content_box_1.ModalContentBox header={<div className={cx("modal-header")}>
            <ui_modal_content_title_1.ModalContentTitle>폴더 공유</ui_modal_content_title_1.ModalContentTitle>
            <ui_modal_content_description_1.ModalContentDescription>{folderName}</ui_modal_content_description_1.ModalContentDescription>
          </div>} content={<div className={cx("modal-content")}>
            <button className={cx("button")} onClick={onKakaoClick}>
              <kakao_svg_1.ReactComponent />
              <span>카카오톡</span>
            </button>
            <button className={cx("button")} onClick={onFacebookClick}>
              <facebook_svg_1.ReactComponent />
              <span>페이스북</span>
            </button>
            <button className={cx("button")} onClick={onLinkCopyClick}>
              <link_svg_1.ReactComponent />
              <span>링크 복사</span>
            </button>
          </div>} onCloseClick={onCloseClick}/>
    </ui_modal_1.Modal>);
};
exports.ShareModal = ShareModal;
