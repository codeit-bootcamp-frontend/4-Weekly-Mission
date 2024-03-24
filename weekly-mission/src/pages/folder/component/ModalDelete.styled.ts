import styled from "styled-components";
import { StylePropsType } from "typeStore";

export const Modal = styled.div<StylePropsType>`
  width: 36rem;
  padding: 3.2rem 4rem;
  background-color: #fff;
  border-radius: 15px;
  display: ${({ $type }) => ($type === "Delete" ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

export const Wrap = styled.div``;
