import styled from "styled-components";

export const Folder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
    gap: 4rem;
    padding-bottom: 6rem;
  }
`;

export const FolderItems = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 112.4rem;
  gap: 3.2rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;
export const SearchResult = styled.div`
  margin-top: 4rem;
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const SearchKeyword = styled.span`
  color: var(--Linkbrary-gray100, #373740);
`;

export const None = styled.h2`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
