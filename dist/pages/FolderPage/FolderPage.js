"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Api_1 = require("../../apis/Api");
const AddLinkInput_1 = __importDefault(require("../../components/AddLinkInput/AddLinkInput"));
const LinkSearch_1 = __importDefault(require("../../components/LinkSearch/LinkSearch"));
const FolderItem_1 = __importDefault(require("../../components/FolderItem/FolderItem"));
function FolderPage() {
    const [usersFolderData, setUsersFolderData] = (0, react_1.useState)([]);
    const [searchKeyword, setSearchKeyword] = (0, react_1.useState)("");
    const inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const getData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const usersFolder = yield (0, Api_1.getUsersFolder)();
                setUsersFolderData(usersFolder.data);
            }
            catch (error) {
                console.log(error);
            }
        });
        getData();
    }, []);
    const handleResetSearch = () => {
        setSearchKeyword("");
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };
    console.log(searchKeyword);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(AddLinkInput_1.default, {}), (0, jsx_runtime_1.jsx)(LinkSearch_1.default, { value: searchKeyword, onChange: (e) => setSearchKeyword(e.target.value), onReset: handleResetSearch, inputRef: inputRef }), (0, jsx_runtime_1.jsx)(FolderItem_1.default, { usersFolderData: usersFolderData, searchKeyword: searchKeyword })] }));
}
exports.default = FolderPage;
