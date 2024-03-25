"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFolderButton = void 0;
const AddFolderButton_module_scss_1 = __importDefault(require("./AddFolderButton.module.scss"));
const bind_1 = __importDefault(require("classnames/bind"));
const add_svg_1 = require("./add.svg");
const cx = bind_1.default.bind(AddFolderButton_module_scss_1.default);
const AddFolderButton = ({ onClick }) => {
    return (<button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <add_svg_1.ReactComponent className={cx("icon")}/>
    </button>);
};
exports.AddFolderButton = AddFolderButton;
