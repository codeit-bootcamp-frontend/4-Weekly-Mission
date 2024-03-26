import styled from "styled-components";
import { StylePropsType } from "typeStore";

export const Modal = styled.div<StylePropsType>`
  width: 36rem;
  padding: 3.2rem 4rem;
  background-color: #fff;
  border-radius: 15px;
  display: ${({ $type }) => ($type === "Edit" ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

export const UserInput = styled.input`
  margin-bottom: 1.5rem;
  padding: 1.8rem 1.5rem;
  border: 1px solid #6d6afe;
  width: 100%;
  border-radius: 8px;
  font-size: 1.6rem;
`;

export const Wrap = styled.div``;
