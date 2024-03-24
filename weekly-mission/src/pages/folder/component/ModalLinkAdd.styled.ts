import styled from "styled-components";
import { StylePropsType } from "typeStore";

export const Modal = styled.div<StylePropsType>`
  width: 36rem;
  padding: 3.2rem 4rem;
  background-color: #fff;
  border-radius: 15px;
  display: ${({ $type }) => ($type === "AddAtFolder" ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

export const FolderList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 15rem;
  overflow-y: scroll;
`;

export const Folder = styled.li<StylePropsType>`
  cursor: pointer;
  padding: 0.8rem;
  font-size: 1.6rem;
  border-radius: 8px;
  position: relative;
  &:hover {
    background-color: #f0f6ff;
  }
  background-color: ${({ $background }) => $background && "#f0f6ff"};
`;

export const LinkCount = styled.span`
  color: #9fa6b2;
  font-size: 1.4rem;
  margin-left: 8px;
`;

export const CheckIcon = styled.img<StylePropsType>`
  visibility: visible;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
`;

export const Wrap = styled.div``;
