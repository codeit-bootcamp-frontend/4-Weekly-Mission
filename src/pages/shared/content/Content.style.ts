import styled from 'styled-components';

export const ContentHeaderContainer = styled.section`
  width: 100%;
  background-color: #edf7ff;
  padding: 2rem 0 6rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  .owner {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    .owner-img {
      height: 6rem;
    }
  }

  .folder-name {
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
  }
`;

export const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1060px;
  margin: 40px auto 0;

  /* tablet */
  @media all and (max-width: 1124px) {
    padding: 0 32px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 25px 20px;
  flex-wrap: wrap;
`;
