import styled from 'styled-components';

export const StyledFolderInfo = styled.div`
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

export const StyledAddLinkBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.75rem 0 5.62rem 0;
  background: var(--Linkbrary-bg, #f0f6ff);

  /* tablet & mobile */
  @media screen and (min-width: 375px) and (max-width: 1199px) {
    padding: 32px;
  }

  .icon {
    position: relative;
    left: 35px;
    width: 1.25rem;
    height: 1.25rem;
  }

  .search-bar {
    display: flex;
    width: 800px;
    padding: 16px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    border-radius: 0.9375rem;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);

    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }

  .button {
    position: relative;
    right: 100px;
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    border-radius: 0.5rem;
    border: none;
    background: var(
      --gra-purpleblue-to-skyblue,
      linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );

    .text {
      color: var(--Grey-Light, #f5f5f5);
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      white-space: nowrap;
      margin: 0;
    }
  }
`;
