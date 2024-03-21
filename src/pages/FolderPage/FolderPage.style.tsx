import styled from "styled-components";
import HeadNav from "src/Components/BasicLayout/HeadNav";

export const FolderPageMain = styled.main`
  position: relative;
  max-width: 1060px;
  margin: 40px auto;

  @media (max-width: 1124px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (max-width: 767px) {
    max-width: 389px;
    padding: 20px 32px;
  }
`;

export const AddFolderButton = styled.button`
  color: var(--LBrary-Primary-color);
  padding: 0;
  border: none;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  display: flex;
  align-items: center;
  text-align: center;
  gap: 4px;
  background-color: var(--LBrary-white);

  @media (max-width: 767px) {
    position: fixed;
    border: 1px solid var(--LBrary-White);
    left: calc(50% - 77.7px);
    border-radius: 20px;
    bottom: 101px;
    color: var(--LBrary-Gray10);
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.3px;
    padding: 8px 24px;
    background-color: var(--LBrary-Primary-color);
    z-index: 1;
  }
`;

export const AddImage = styled.div`
  background-image: url("add.svg");
  width: 16px;
  height: 16px;

  @media (max-width: 767px) {
    background-image: url("addwhite.svg");
  }
`;

export const CurrentSubFolder = styled.p`
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;

  @media (max-width: 767px) {
    font-size: 2 rem;
  }
`;

export const EmptySpace = styled.div`
  color: var(--LBrary-Black);
  padding: 41px 0 35px;
  margin: 0 auto;
  height: calc(100vh - 738px);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 1124px) {
    height: calc(100vh - 782px);
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

export const SubFolderUtil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    row-gap: 12px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
