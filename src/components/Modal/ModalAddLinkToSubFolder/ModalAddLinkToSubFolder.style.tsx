import styled from "styled-components";

export const SubFolderDesireToAddLinkButton = styled.button<{
  $state: boolean;
}>`
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;
  padding: 0.8rem;
  border: none;
  background-color: transparent;
  align-items: center;
  border-radius: 8px;

  background-color: ${({ $state }) =>
    $state === true ? `var(--lb-background)` : `var(--lb-white)`};

  &:hover {
    background-color: var(--lb-background);
  }

  h2 {
    color: var(--lb-gray100);

    /* Linkbrary/body1-regular */
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem; /* 150% */
  }

  span {
    margin-left: 0.8rem;
    color: var(--lb-gray60);

    /* Linkbrary/body2-regular */
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
