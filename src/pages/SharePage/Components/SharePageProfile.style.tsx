import styled from "styled-components";

export const SharePageProfileSection = styled.section`
  background-color: var(--lb-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 6rem;

  @media (max-width: 767px) {
    padding-top: 1rem;
    padding-bottom: 4rem;
  }
`;

export const SharePageProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;

  @media (max-width: 767px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const SharePageFolderOwnerName = styled.p`
  margin-top: 1.2rem;

  @media (max-width: 767px) {
    margin-top: 0.6rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 100%;
  }
`;

export const SharePageFolderName = styled.h1`

  margin-top: 2rem;

  
  
@media (max-width: 767px) {  
    margin-top: 10px;
    font-size: 3.2rem;
    letter-spacing: -0.02rem;
  }
}
`;
