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
const react_router_dom_1 = require("react-router-dom");
const Api_1 = require("../../apis/Api");
const logo_svg_1 = __importDefault(require("../../assets/logo.svg"));
const styled_components_1 = __importDefault(require("styled-components"));
const Gnb_module_scss_1 = __importDefault(require("./Gnb.module.scss"));
function Gnb() {
    const location = (0, react_router_dom_1.useLocation)();
    const [userData, setUserData] = (0, react_1.useState)({ email: "", img: "" });
    const [isUserDataLoaded, setIsUserDataLoaded] = (0, react_1.useState)(false);
    const isSharedPage = location.pathname === "/shared";
    (0, react_1.useEffect)(() => {
        const getUserData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let user;
                if (isSharedPage) {
                    user = yield (0, Api_1.getSharedUser)();
                    setUserData({ email: user.email, img: user.profileImageSource });
                }
                else {
                    user = yield (0, Api_1.getFolderUser)();
                    const { email, image_source: img } = user.data[0];
                    setUserData({ email, img });
                }
                setIsUserDataLoaded(true);
            }
            catch (error) {
                console.log(error);
            }
        });
        getUserData();
    }, [location.pathname]);
    return ((0, jsx_runtime_1.jsx)("div", { className: isSharedPage && Gnb_module_scss_1.default.isSharedPage, children: (0, jsx_runtime_1.jsx)(GnbContainer, { isSharedPage: isSharedPage, children: (0, jsx_runtime_1.jsxs)("div", { className: Gnb_module_scss_1.default.Gnb, children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: (0, jsx_runtime_1.jsx)("img", { src: logo_svg_1.default, alt: "logo" }) }), (0, jsx_runtime_1.jsx)("div", { className: Gnb_module_scss_1.default.profileBox, children: isUserDataLoaded ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("img", { className: Gnb_module_scss_1.default.profileImg, src: userData.img, alt: "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0" }), (0, jsx_runtime_1.jsx)("p", { className: Gnb_module_scss_1.default.profileEmail, children: userData.email })] })) : ((0, jsx_runtime_1.jsx)("button", { className: Gnb_module_scss_1.default.gnbBtn, children: "\uB85C\uADF8\uC778" })) })] }) }) }));
}
exports.default = Gnb;
const GnbContainer = styled_components_1.default.div `
  ${({ isSharedPage }) => isSharedPage &&
    `
    position: sticky;
    top: 0;
    z-index: 2;
  `}
`;
