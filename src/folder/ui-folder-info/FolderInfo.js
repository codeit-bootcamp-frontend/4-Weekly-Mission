"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderInfo = void 0;
const FolderInfo_module_scss_1 = __importDefault(require("./FolderInfo.module.scss"));
const bind_1 = __importDefault(require("classnames/bind"));
const cx = bind_1.default.bind(FolderInfo_module_scss_1.default);
const FolderInfo = ({ profileImage, ownerName, folderName }) => {
    return (<div className={cx("container")}>
      <img className={cx("profile")} src={profileImage} alt="폴더 소유자 프로필 이미지"/>
      <span className={cx("owner")}>{ownerName}</span>
      <h2 className={cx("folder")}>{folderName}</h2>
    </div>);
};
exports.FolderInfo = FolderInfo;
