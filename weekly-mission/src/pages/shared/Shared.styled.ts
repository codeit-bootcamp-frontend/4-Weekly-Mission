import styled from "styled-components";

export const OwnerInfoSection = styled.section`
  padding-top: 10rem;
  padding-bottom: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;
`;

export const LinkCardsSection = styled.section`
  padding: 4rem 0;
  min-height: 100rem;
`;

export const LinkCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 1124px) {
    padding: 0 3.2rem;
  }
  @media (max-width: 790px) {
    gap: 3.2rem;
  }
`;

export const LinkCardList = styled.ul`
  width: 106rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  @media (max-width: 1124px) {
    width: 72.4rem;
    gap: 2rem 2.4rem;
  }
  @media (max-width: 790px) {
    width: 34rem;
  }
`;
