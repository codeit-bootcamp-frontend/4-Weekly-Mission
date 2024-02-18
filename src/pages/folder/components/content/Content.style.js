import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 140px;
  margin: 40px 0px 60px 0;

  .card-box {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }

  /* tablet 화면 너비가 1124px 이하인 경우 */
  @media screen and (max-width: 1124px) {
    .card-box {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* mobile 화면  */
  @media screen and (min-width: 375px) and (max-width: 767px) {
    .card-box {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  /* tablet & mobile */
  @media screen and (min-width: 375px) and (max-width: 1199px) {
    padding: 32px;
  }
`;

export const YesLink = styled.div`
  display: flex;
`;

export const NoLinks = styled.div`
  display: flex;
  height: 6.25rem;
  padding: 2.5625rem 0rem 2.1875rem 0rem;
  justify-content: center;
  align-items: center;
`;
