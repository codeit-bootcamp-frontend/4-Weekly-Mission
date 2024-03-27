"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderItem = void 0;
const FolderItem_module_scss_1 = __importDefault(require("./FolderItem.module.scss"));
const bind_1 = __importDefault(require("classnames/bind"));
const cx = bind_1.default.bind(FolderItem_module_scss_1.default);
const FolderItem = ({ folderName, linkCount, isSelected = false, onClick }) => {
    return (<button className={cx("button", { isSelected })} onClick={onClick}>
      <span className={cx("name", { isSelected })}>{folderName}</span>
      <span className={cx("count")}>{linkCount}개 링크</span>
      {isSelected && <img className={cx("check")} src="images/check.svg" alt="체크 아이콘"/>}
    </button>);
};
exports.FolderItem = FolderItem;
