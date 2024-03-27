import styled from "styled-components";

export const SelectedFolder = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;
`;

export const FolderName = styled.span`
  color: #000;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.02rem;
`;

export const SelectedOption = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const SelectedOptionContent = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ContentP = styled.p`
  color: var(--gray60);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
