import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
`;

export const KebabButton = styled.img`
  &:hover {
    opacity: 0.5;
  }
`;

export const KebabMenuBox = styled.div`
  display: ${({ $kebabopen }) => ($kebabopen === "true" ? `block` : `none`)};

  position: absolute;
  width: 100px;
  height: 64px;
  background-color: white;

  div {
    padding: 7px 12px;
    font-size: 14px;
    text-align: center;
  }
`;

export const Delete = styled.div`
  &:hover {
    background-color: #e7effb;
    color: #6d6afe;
  }
`;

export const AddToFolder = styled.div`
  &:hover {
    background-color: #e7effb;
    color: #6d6afe;
  }
`;
