import styled from "styled-components";

export const SubFolderDesireToAddLinkButton = styled.button<{
  $state: boolean;
}>`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  padding: 8px;
  border: none;
  background-color: transparent;
  align-items: center;
  border-radius: 8px;

  background-color: ${({ $state }) =>
    $state === true ? `var(--LBrary-Background)` : `var(--LBrary-white)`};

  &:hover {
    background-color: var(--LBrary-Background);
  }

  h2 {
    color: var(--Linkbrary-gray100, #373740);
    /* Linkbrary/body1-regular */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }

  span {
    margin-left: 8px;
    color: var(--Linkbrary-gray60, #9fa6b2);
    /* Linkbrary/body2-regular */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
