import styled from "styled-components";
export const ProfileBlock = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const ProfileImgBox = styled.div`
  width: 2.8rem;
  height: 2.8rem;
`;

export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const ProfileEmail = styled.p`
  font-size: 1.4rem;
  color: #373740;
  line-height: 1;
  @media (max-width: 790px) {
    display: none;
  }
`;
