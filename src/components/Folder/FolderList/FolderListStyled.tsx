import styled, { css } from "styled-components";

interface FolderButtonProps {
  active?: boolean;
}

export const FolderListContainer = styled.div`
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 2.4rem;
`;

export const FolderLists = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const FolderButton = styled.button<FolderButtonProps>`
  display: flex;
  padding: 0.8rem 1.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  white-space: nowrap;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      color: #ffffff;
      background: var(--primary);
    `}
`;

export const FolderAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const FolderAddText = styled.button`
  color: #6d6afe;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03rem;
`;
