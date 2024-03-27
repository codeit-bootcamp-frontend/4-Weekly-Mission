import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { BlueButton } from "../common/BlueButton";
export const Headline = () => {
    return (_jsxs(Container, { children: [_jsx(TextBox, { children: _jsxs(HeadlineText, { children: [_jsx(Strong, { children: "\uC138\uC0C1\uC758 \uBAA8\uB4E0 \uC815\uBCF4" }), "\uB97C", _jsx("br", {}), "\uC27D\uAC8C \uC800\uC7A5\uD558\uACE0 ", _jsx(LineBreak, {}), "\uAD00\uB9AC\uD574 \uBCF4\uC138\uC694."] }) }), _jsx(BlueButton, { text: "\uB9C1\uD06C \uCD94\uAC00\uD558\uAE30", width: "350px", height: "auto", margin: "40px auto", padding: "10px 20px", fontSize: "18px", radius: "8px", onBtnHandle: () => { } })] }));
};
const Container = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.p `
  width: 100%;
  text-align: center;
`;
const HeadlineText = styled.span `
  font-size: 64px;
  font-weight: 700;

  @media (max-width: 774px) {
    font-size: 32px;
  }
`;
const Strong = styled(HeadlineText) `
  background: linear-gradient(90deg, #6d6afe, #ff9f9f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const LineBreak = styled.br `
  display: none;

  @media (max-width: 1124px) {
    display: block;
  }
`;
