import styled from 'styled-components';

export const Content = styled.section`
  width: 66.25rem;
  margin: 2.5rem auto;

  @media screen and (max-width: 1124px) {
    width: 44rem;
  }
  @media screen and (max-width: 767px) {
    width: 20.3rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`;

export const SearchInput = styled.input`
  width: 66.25rem;
  padding: 0.9375rem 1rem;
  border-radius: 0.625rem;
  background-color: #f5f5f5;
  border: none;
  outline: none;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 1124px) {
    width: 44rem;
  }

  @media screen and (max-width: 767px) {
    width: 20.3rem;
    margin-bottom: 2rem;
  }
`;

export const SearchResult = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: var(--Linkbrary-gray60);
  margin: 0 0 2.5rem;
`;

export const SearchValue = styled.span`
  color: var(--Linkbrary-gray100);
`;
