import styled from "styled-components";

export const SubFolderBtnList = styled.div`
  max-width: 85%;
  flex-wrap: wrap;
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const SubFolderUtilList = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  border: none;
  color: var(--LBrary-Gray60);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  align-items: center;
  text-align: center;
  gap: 4px;
  background-color: var(--LBrary-white);

  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const SubFolderBtn = styled.button<{ $state: boolean }>`
  color: var(--LBrary-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 5px;
  border: 1px solid var(--LBrary-Primary-color);
  padding: 8px 12px;

  display: flex;
  align-items: center;
  text-align: center;
  gap: 4px;
  background-color: ${({ $state }) =>
    $state === true ? `var(--LBrary-Primary-color)` : `var(--LBrary-white);`};
  color: ${({ $state }) =>
    $state === true ? `var(--LBrary-White);` : `var(--LBrary-Black);`};

  @media (max-width: 1124px) {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
