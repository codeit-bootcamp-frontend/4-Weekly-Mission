import styled, { css } from "styled-components";

interface FolderListButtonProps {
  isClick: boolean;
}

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
`;

export const ItemsP = styled.p`
  color: #9fa6b2;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 100%;
`;

export const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 0.4rem;
  width: 100%;
  max-height: 17.2rem;
`;

export const FolderListButton = styled.button<FolderListButtonProps>`
  position: relative;
  background-color: ${({ isClick }) => (isClick ? "#f0f6ff" : "#fff")};
  align-items: center;
  border-radius: 0.8rem;
  gap: 0.8rem;
  display: flex;
  flex: 0 0 4rem;
  height: 4rem;
  padding: 0.8rem;
  width: 100%;
  border: none;

  &:hover {
    background-color: ${({ isClick }) => (isClick ? "#f0f6ff" : "#f5f5f5")};
  }

  ${({ isClick }) =>
    isClick &&
    css`
      &::after {
        content: url(../../../../../public/images/check.svg);
        position: absolute;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        right: 0.8rem;
        width: 1.4rem;
        height: 1.4rem;
      }
    `}
`;

export const ListName = styled.span`
  color: #373740;
  font-size: 1.6rem;
`;

export const ListCount = styled.span`
  color: #9fa6b2;
  font-size: 1.4rem;
`;

export const AddButton = styled.button`
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border-radius: 0.8rem;
  border: none;
  color: #f5f5f5;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.8rem 1.5rem;
  width: 100%;
  height: 5.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
