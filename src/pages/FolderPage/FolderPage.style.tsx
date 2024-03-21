import styled from "styled-components";

export const FolderPageMain = styled.main`
  position: relative;
  max-width: 106rem;
  margin: 0 auto 6rem;
  padding-top: 4rem;
  

  @media (max-width: 1124px) {
    max-width: 76.8rem;
    padding: 4rem 3.2rem;
  }

  @media (max-width: 767px) {
    max-width: 389px;
    padding: 4rem 3.2rem;

`;

export const LinkAddBarEndPoint = styled.div<{ $linkAddBarMargin: boolean }>`
  height: 0;
  margin-top: ${({ $linkAddBarMargin }) =>
    $linkAddBarMargin ? "20.8rem" : "0"};  

  @media(max-width:767px) {
    margin-top: ${({ $linkAddBarMargin }) =>
      $linkAddBarMargin ? "11.7rem" : "0"};  
  11.7rem
}
  }
`;

export const FooterStartPoint = styled.div`
  height: 0;
`;

export const AddFolderButton = styled.button`
  color: var(--LBrary-Primary-color);
  padding: 0;
  border: none;
  text-align: center;

  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03rem;

  display: flex;
  align-items: center;
  text-align: center;
  gap: 4px;
  background-color: var(--LBrary-white);

  @media (max-width: 767px) {
    position: fixed;
    border: 1px solid var(--LBrary-White);
    left: calc(50% - 7.77rem);
    border-radius: 2rem;
    bottom: 10.1rem;
    color: var(--LBrary-Gray10);
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
    padding: 0.8rem 2.4rem;
    background-color: var(--LBrary-Primary-color);
    z-index: 1;
  }
`;

export const AddImage = styled.div`
  background-image: url("add.svg");
  width: 1.6rem;
  height: 1.6rem;

  @media (max-width: 767px) {
    background-image: url("addwhite.svg");
  }
`;

export const CurrentSubFolder = styled.p`
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const EmptySpace = styled.div`
  color: var(--LBrary-Black);
  padding: 4.1rem 0 3.5rem;
  margin: 0 auto;
  height: calc(100vh - 73.8rem);
  text-align: center;

  @media (max-width: 1124px) {
    height: calc(100vh - 78.2rem);
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

export const SubFolderUtil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  @media (max-width: 767px) {
    row-gap: 1.2rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;
