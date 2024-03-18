import styled from "styled-components";

export const SharePageProfileSection = styled.section`
  background-color: var(--LBrary-Background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 60px;

  @media (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 40px;
  }
`;

export const SharePageProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

export const SharePageFolderOwnerName = styled.p`
  margin-top: 12px;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 767px) {
    margin-top: 6px;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 100%;
  }
`;

export const SharePageFolderName = styled.h1`

margin-top: 20px;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal; 
  
@media (max-width: 767px) {  
    margin-top: 10px;
    font-size: 3.2rem;
    letter-spacing: -0.02rem;
  }
}
`;
