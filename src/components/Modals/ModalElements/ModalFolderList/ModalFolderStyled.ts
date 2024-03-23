import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

export const SubTitle = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const FolderCount = styled.span`
  font-size: 1.4rem;
  line-height: 1.671rem;
  color: var(--gray60);
`;

export const SelectFolderIcon = styled.div`
  display: none;
  width: 1.125rem;
  height: 0.95rem;
  background-image: url("../../../../public/images/check.svg");
  position: absolute;
  right: 5.5rem;
`;
