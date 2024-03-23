import styled, { css } from "styled-components"

const addLinkStyle = css`
  width: 80px;
  height: 37px;
`

const defaultStyle = css`
  width: 100%;
  height: 80px;
`

const headerStyle = css`
  width: 128px;
  height: 53px;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 767px) {
    width: 80px;
    height: 37px;
    padding: 10px 21.5px;
    font-size: 14px;
  }
`

const backgroundMapping = {
  gradient: "linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%)",
}

const typeMapping = {
  header: headerStyle,
  addLink: addLinkStyle,
  default: defaultStyle,
}

export const Button = styled.button<{ $type: keyof typeof typeMapping; $bgColor: keyof typeof backgroundMapping }>`
  ${({ $type }) => typeMapping[$type] || typeMapping["default"]}
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 8px;
  background: ${({ $bgColor }) => backgroundMapping[$bgColor] || "white"};
  position: relative;
`
