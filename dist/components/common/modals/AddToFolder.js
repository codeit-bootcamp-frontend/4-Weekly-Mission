import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from "styled-components";
import { COLORS } from "../../../constants/colors";
import closeIcon from "../../../assets/icons/closeModal.png";
import { BlueButton } from "../BlueButton";
export const AddToFolder = ({ $isModalVisible, setIsModalVisible }) => {
    const handleCloseBtn = () => {
        setIsModalVisible(null);
    };
    return (_jsx(Background, { "$isVisible": $isModalVisible, onClick: (e) => {
            e.preventDefault();
        }, children: _jsxs(Modal, { children: [_jsx(Close, { onClick: (e) => {
                        handleCloseBtn();
                    }, children: _jsx("img", { src: closeIcon, alt: closeIcon }) }), _jsxs(Title, { children: [_jsx("h3", { children: "\uD3F4\uB354\uC5D0 \uCD94\uAC00" }), _jsx("p", { children: "\uB9C1\uD06C \uC8FC\uC18C" })] }), _jsxs(Folders, { children: [_jsxs(Folder, { children: ["\uCF54\uB529\uD301 ", _jsx("p", { children: "7\uAC1C \uB9C1\uD06C" })] }), _jsxs(Folder, { children: ["\uCC44\uC6A9 \uC0AC\uC774\uD2B8 ", _jsx("p", { children: "12\uAC1C \uB9C1\uD06C" })] }), _jsxs(Folder, { children: ["\uC720\uC6A9\uD55C \uAE00 ", _jsx("p", { children: "30\uAC1C \uB9C1\uD06C" })] }), _jsxs(Folder, { children: ["\uB098\uB9CC\uC758 \uC7A5\uC18C ", _jsx("p", { children: "3\uAC1C \uB9C1\uD06C" })] })] }), _jsx(BlueButton, { text: "\uCD94\uAC00\uD558\uAE30", width: "280px", height: "auto", margin: "0px", onBtnHandle: () => { }, padding: "16px 20px", fontSize: "16px", radius: "8px" })] }) }));
};
const Background = styled.div `
  display: ${({ $isVisible }) => $isVisible === "폴더에 추가" ? "block" : "none"};
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: visibility 0.3s ease;

  &:hover {
    cursor: default;
  }
`;
const Modal = styled.div `
  position: absolute;
  top: 10%;
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
  text-align: center;
  font-family: Pretendard;
  font-style: normal;

  & > h3 {
    color: #373740;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 8px;
  }

  & > p {
    color: ${COLORS.Grey_400};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;
const Folders = styled.div `
  width: 264px;
`;
const Folder = styled.div `
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  color: #373740;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
    background: ${COLORS.Grey_100};
    color: ${COLORS.Primary};
  }

  & > p {
    color: ${COLORS.Grey_400};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
