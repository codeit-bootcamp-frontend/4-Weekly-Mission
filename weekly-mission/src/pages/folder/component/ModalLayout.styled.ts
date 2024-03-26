import styled from "styled-components";
import { StylePropsType } from "typeStore";

export const Layout = styled.div<StylePropsType>`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: ${({ $state }) => ($state ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
