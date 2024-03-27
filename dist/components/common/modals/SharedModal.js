import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import closeIcon from "../../../assets/icons/closeModal.png";
import kakao from "../../../assets/icons/icon_kakao.png";
import facebook from "../../../assets/icons/icon_facebook.png";
import link from "../../../assets/icons/link.png";
export const SharedModal = ({ $isModalVisible, setIsModalVisible }) => {
    const ICONS = [
        {
            name: "카카오톡",
            backgroundColor: "#F5E14B",
            imgUrl: kakao,
        },
        {
            name: "페이스북",
            backgroundColor: "#1877F2",
            imgUrl: facebook,
        },
        {
            name: "링크 복사",
            imgUrl: link,
        },
    ];
    const handleCloseBtn = () => {
        setIsModalVisible(null);
    };
    return (_jsx(Background, { "$isVisible": $isModalVisible, children: _jsxs(Modal, { children: [_jsx(Close, { onClick: () => handleCloseBtn(), children: _jsx("img", { src: closeIcon, alt: closeIcon }) }), _jsxs(Title, { children: [_jsx("h3", { children: "\uD3F4\uB354 \uACF5\uC720" }), _jsx("p", { children: "\uD3F4\uB354\uBA85" })] }), _jsx(Icons, { children: ICONS.map((icon) => (_jsxs(Icon, { children: [_jsx(IconImg, { "$backgroundColor": icon.backgroundColor, children: _jsx("img", { src: icon.imgUrl, alt: icon.name }) }), _jsx("span", { children: icon.name })] }, icon.name))) })] }) }));
};
const Background = styled.div `
  display: ${({ $isVisible }) => ($isVisible === "공유" ? "block" : "none")};
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: visibility 0.3s ease;
`;
const Modal = styled.div `
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 32px 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  background: ${COLORS.White};
  transition: visibility 0.3s ease;
`;
const Close = styled.button `
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;

  &:hover {
    cursor: pointer;
  }
`;
const Title = styled.div `
  & > h3 {
    color: #373740;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 8px;
  }

  & > p {
    color: ${COLORS.Grey_400};
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;
const Icons = styled.div `
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 0px 32px;
`;
const Icon = styled.div `
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > span {
    color: #373740;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
  }
`;
const IconImg = styled.div `
  width: 42px;
  height: 42px;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? null};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 18px;
    height: 18px;
  }
`;
