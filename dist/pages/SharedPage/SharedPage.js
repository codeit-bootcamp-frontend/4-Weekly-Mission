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
const Header_1 = __importDefault(require("../../components/Header/Header"));
const LinkSearch_1 = __importDefault(require("../../components/LinkSearch/LinkSearch"));
const Cards_1 = __importDefault(require("../../components/Cards/Cards"));
function SharedPage() {
    // Header
    const [folderData, setFolderData] = (0, react_1.useState)({
        folderName: "",
        profileName: "",
        profileImg: "",
    });
    (0, react_1.useEffect)(() => {
        const getFolderData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield (0, Api_1.getFolder)();
                setFolderData({
                    folderName: profile.folder.name,
                    profileName: profile.folder.owner.name,
                    profileImg: profile.folder.owner.profileImageSource,
                });
            }
            catch (error) {
                console.log(error);
            }
        });
        getFolderData();
    }, []);
    // Cards
    const [cardList, setCardList] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const getFolderData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const card = yield (0, Api_1.getFolder)();
                setCardList(card.folder.links);
            }
            catch (error) {
                console.log(error);
            }
        });
        getFolderData();
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, { folderData: folderData }), (0, jsx_runtime_1.jsx)(LinkSearch_1.default, {}), (0, jsx_runtime_1.jsx)(Cards_1.default, { cardList: cardList })] }));
}
exports.default = SharedPage;
