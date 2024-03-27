import styled from "styled-components";

export const CategoryNavBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const ActiveCategory = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 2.88rem;
  letter-spacing: -0.02rem;
`;
export const CategoryNavButtons = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`;
