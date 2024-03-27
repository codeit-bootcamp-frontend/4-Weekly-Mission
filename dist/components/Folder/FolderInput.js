import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from "styled-components";
import Link from "../../assets/icons/link.svg";
import { BlueButton } from "../common/BlueButton";
import { forwardRef } from "react";
const FolderInput = forwardRef(({ setIsVisible, $isAddLinkVisible }, ref) => {
    const onAddLinkButtonClick = () => {
        setIsVisible("폴더 추가");
    };
    return (_jsx(BackGround, { ref: ref, "$isAddLinkVisible": $isAddLinkVisible, children: !$isAddLinkVisible ? (_jsx(BackGroundFixed, { children: _jsxs(InputBoxFixed, { children: [_jsx("img", { src: Link, alt: "LinkIcon" }), _jsx(Input, { placeholder: "\uB9C1\uD06C\uB97C \uCD94\uAC00\uD574 \uBCF4\uC138\uC694." }), _jsx(BlueButton, { width: "80px", height: "auto", padding: "10px 16px", margin: "0px", text: "\uCD94\uAC00\uD558\uAE30", fontSize: "", radius: "8px", onBtnHandle: () => onAddLinkButtonClick() })] }) })) : (_jsxs(InputBox, { "$isAddLinkVisible": $isAddLinkVisible, children: [_jsx("img", { src: Link, alt: "LinkIcon" }), _jsx(Input, { placeholder: "\uB9C1\uD06C\uB97C \uCD94\uAC00\uD574 \uBCF4\uC138\uC694." }), _jsx(BlueButton, { width: "80px", height: "auto", padding: "10px 16px", margin: "0px", text: "\uCD94\uAC00\uD558\uAE30", fontSize: "", radius: "8px", onBtnHandle: () => onAddLinkButtonClick() })] })) }));
});
export default FolderInput;
const BackGround = styled.div `
  background-color: var(--Grey_100);
  display: flex;
  justify-content: center;
  position: relative;
`;
const BackGroundFixed = styled.div `
  background-color: var(--Grey_100);
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;
const InputBox = styled.div `
  width: 800px;
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
  margin: 60px auto 90px;
  display: flex;
  flex-direction: row;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 774px) {
    width: 325px;
  }
`;
const InputBoxFixed = styled(InputBox) `
  margin: 24px auto;

  @media (max-width: 360px) {
    margin: 16px auto;
  }
`;
const Input = styled.input `
  width: 100%;
  border: none;
  margin-left: 12px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9fa6b2;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  @media (max-width: 774px) {
    &::placeholder {
      font-size: 14px;
    }
  }
`;
