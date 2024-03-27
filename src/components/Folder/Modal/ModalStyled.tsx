import styled from "styled-components";

export const ModalBackground = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.4);
  z-index: 10;
`;

export const ModalBox = styled.div`
  background-color: #fff;
  border-radius: 1.5rem;
  position: absolute;
  width: 36rem;
  height: fit-content;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 3.2rem 4rem;
  z-index: 11;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  border: none;
  cursor: pointer;
  background-color: initial;
`;

export const Items = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  width: 100%;
`;

export const ItemsText = styled.h2`
  color: #373740;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
