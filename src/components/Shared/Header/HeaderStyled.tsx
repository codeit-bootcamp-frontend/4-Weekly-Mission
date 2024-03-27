import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0 4rem;
  box-sizing: border-box;
  background-color: var(--light-blue);

  @media (min-width: 768px) {
    padding: 2rem 0 6rem;
  }
`;

export const Profile = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const Owner = styled.span`
  margin-top: 0.6rem;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    margin-top: 1.2rem;
    font-size: 1.6rem;
    line-height: 150%;
  }
`;

export const FolderInfo = styled.h2`
  margin-top: 1rem;
  font-size: 3.2rem;
  font-weight: 600;

  @media (min-width: 768px) {
    margin-top: 2rem;
    font-size: 4rem;
  }
`;
