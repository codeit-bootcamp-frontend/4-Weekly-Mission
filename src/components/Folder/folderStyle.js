import styled from 'styled-components';

export const FolderSummary = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 0 3.75rem;
  background-color: var(--Linkbrary-bg);
`;

export const Figure = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  height: 3.75rem;
  margin-bottom: 0.75rem;
`;

export const Figcaption = styled.figcaption`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 1.25rem;
`;

export const Header = styled.header`
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: normal;
  }
`;
