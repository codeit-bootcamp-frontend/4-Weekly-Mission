import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1060px;
  margin: 40px auto 0;

  /* tablet */
  @media all and (max-width: 1124px) {
    padding: 0 32px;
  }

  .card-box {
    display: flex;
    justify-content: space-between;
    gap: 25px 20px;
    flex-wrap: wrap;
  }
`;
