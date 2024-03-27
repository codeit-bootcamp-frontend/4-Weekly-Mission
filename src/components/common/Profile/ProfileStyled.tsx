import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
`;

export const Image = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`;

export const Email = styled.span`
  display: none;
  font-size: 1.4rem;
  color: var(--gray100);

  @media (min-width: 768px) {
    display: inline;
  }
`;
