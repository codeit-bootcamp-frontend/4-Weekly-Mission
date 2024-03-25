"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderToolBar = void 0;
const FolderToolBar_module_scss_1 = __importDefault(require("./FolderToolBar.module.scss"));
const bind_1 = __importDefault(require("classnames/bind"));
const ui_add_folder_button_1 = require("folder/ui-add-folder-button");
const ui_folder_button_1 = require("folder/ui-folder-button");
const ui_icon_and_text_button_1 = require("sharing/ui-icon-and-text-button");
const constant_1 = require("./constant");
const constant_2 = require("link/data-access-link/constant");
const react_1 = require("react");
const ui_share_modal_1 = require("folder/ui-share-modal");
const ui_input_modal_1 = require("sharing/ui-input-modal");
const ui_alert_modal_1 = require("sharing/ui-alert-modal");
const copyToClipboard_1 = require("sharing/util/copyToClipboard");
const useKakaoSdk_1 = require("sharing/util/useKakaoSdk");
const cx = bind_1.default.bind(FolderToolBar_module_scss_1.default);
const FolderToolBar = ({ folders, selectedFolderId, onFolderClick }) => {
    var _a;
    const { shareKakao } = (0, useKakaoSdk_1.useKakaoSdk)();
    const [currentModal, setCurrentModal] = (0, react_1.useState)(null);
    const folderName = constant_2.ALL_LINKS_ID === selectedFolderId
        ? constant_1.ALL_LINKS_TEXT
        : (_a = folders === null || folders === void 0 ? void 0 : folders.find(({ id }) => id === selectedFolderId)) === null || _a === void 0 ? void 0 : _a.name;
    const shareLink = `${window.location.origin}/shared?user=1&folder=${selectedFolderId}`;
    const closeModal = () => setCurrentModal(null);
    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    };
    const handleKakaoClick = () => {
        shareKakao(Object.assign({ url: shareLink }, constant_1.KAKAO_SHARE_DATA));
    };
    const handleFacebookClick = () => window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);
    const handleLinkCopyClick = () => (0, copyToClipboard_1.copyToClipboard)(shareLink);
    return (<div className={cx("container")}>
      <div className={cx("folders")}>
        <ui_folder_button_1.FolderButton key={constant_2.ALL_LINKS_ID} text={constant_1.ALL_LINKS_TEXT} onClick={() => onFolderClick(constant_2.ALL_LINKS_ID)} isSelected={constant_2.ALL_LINKS_ID === selectedFolderId}/>
        {folders === null || folders === void 0 ? void 0 : folders.map(({ id, name }) => (<ui_folder_button_1.FolderButton key={id} text={name} onClick={() => onFolderClick(id)} isSelected={id === selectedFolderId}/>))}
      </div>
      <div className={cx("add-button")}>
        <ui_add_folder_button_1.AddFolderButton onClick={() => setCurrentModal(constant_1.MODALS_ID.addFolder)}/>
        <ui_input_modal_1.InputModal isOpen={currentModal === constant_1.MODALS_ID.addFolder} title="폴더 추가" placeholder="내용 입력" buttonText="추가하기" onCloseClick={closeModal} onKeyDown={handleKeyDown}/>
      </div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
      {selectedFolderId !== constant_2.ALL_LINKS_ID && (<div className={cx("buttons")}>
          {constant_1.BUTTONS.map(({ text, iconSource, modalId }) => (<ui_icon_and_text_button_1.IconAndTextButton key={text} iconSource={iconSource} onClick={() => setCurrentModal(modalId)}/>))}
          <ui_share_modal_1.ShareModal isOpen={currentModal === constant_1.MODALS_ID.share} folderName={folderName} onKakaoClick={handleKakaoClick} onFacebookClick={handleFacebookClick} onLinkCopyClick={handleLinkCopyClick} onCloseClick={closeModal} onKeyDown={handleKeyDown}/>
          <ui_input_modal_1.InputModal isOpen={currentModal === constant_1.MODALS_ID.rename} title="폴더 이름 변경" placeholder="내용 입력" buttonText="변경하기" onCloseClick={closeModal} onKeyDown={handleKeyDown}/>
          <ui_alert_modal_1.AlertModal isOpen={currentModal === constant_1.MODALS_ID.delete} title="폴더 삭제" description={folderName} buttonText="삭제하기" onCloseClick={closeModal} onKeyDown={handleKeyDown}/>
        </div>)}
    </div>);
};
exports.FolderToolBar = FolderToolBar;
