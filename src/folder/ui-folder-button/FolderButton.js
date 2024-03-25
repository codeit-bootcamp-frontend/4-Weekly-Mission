"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderButton = void 0;
const FolderButton_module_scss_1 = __importDefault(require("./FolderButton.module.scss"));
const bind_1 = __importDefault(require("classnames/bind"));
const cx = bind_1.default.bind(FolderButton_module_scss_1.default);
const FolderButton = ({ text, onClick, isSelected = false }) => {
    return (<button className={cx("container", { selected: isSelected })} onClick={onClick}>
      <span>{text}</span>
    </button>);
};
exports.FolderButton = FolderButton;
