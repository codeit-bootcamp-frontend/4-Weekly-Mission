import styled from "styled-components";
import { StylePropsType } from "typeStore";

export const Modal = styled.div<StylePropsType>`
  width: 36rem;
  padding: 3.2rem 4rem;
  background-color: #fff;
  border-radius: 15px;
  display: ${({ $type }) => ($type === "Share" ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

export const SharePlatformBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const SharePlatform = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const IconWrap = styled.div<StylePropsType>`
  background-color: ${({ $backColor }) => $backColor};
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlatformImg = styled.img``;

export const PlatformName = styled.span`
  color: #373740;
  font-size: 1.3rem;
`;
