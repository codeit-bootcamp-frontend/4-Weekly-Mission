import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import logo from "../../assets/Linkbrary.png";
import profile from "../../assets/icons/icon_myprofile.png";
import { getUserInfo } from "../../api/api";
import { useGetPromise } from "../../hooks/uesGetPromise";
import "../../styles/common.css";
function HeaderElement({ $positionval }) {
    const user = useGetPromise(getUserInfo);
    const email = user?.email;
    const profileImageSource = user?.profileImageSource;
    return (_jsxs(Header, { "$positionval": $positionval, children: [_jsx("img", { src: logo, alt: "logo" }), _jsx("div", { className: "myProfile", children: user ? (_jsxs("div", { id: "myProfileName", children: [_jsx("div", { id: "myProfile-back_img", children: _jsx("img", { src: profileImageSource ? profileImageSource : profile, id: "myProfile-img", alt: "myProfile-img" }) }), _jsx("span", { id: "myEmail", children: email })] })) : (_jsx("a", { href: "/signup.html", children: _jsx("button", { id: "LoginBtn", type: "button", children: "\uB85C\uADF8\uC778" }) })) })] }));
}
const Header = styled.div `
  background-color: var(--Grey_100);
  padding: 20px 200px;
  position: ${({ $positionval }) => ($positionval ? $positionval : "sticky")};
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    padding: 32px;
  }
  @media (max-width: 774px) {
    padding: 18px 32px;
  }
`;
export default HeaderElement;
