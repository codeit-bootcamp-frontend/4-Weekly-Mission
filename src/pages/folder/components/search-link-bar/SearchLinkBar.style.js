import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.75rem 0 5.62rem 0;
  background: var(--Linkbrary-bg, #f0f6ff);

  .icon {
    position: relative;
    left: 35px;
    width: 1.25rem;
    height: 1.25rem;
  }

  .search-bar {
    display: flex;
    width: 50rem;
    padding: 1rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    /* height: 4.3125rem; */

    border-radius: 0.9375rem;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);

    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }

  .button {
    position: relative;
    right: 6rem;

    display: flex;
    width: 5rem;
    padding: 0.625rem 1rem;
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
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      white-space: nowrap;
      margin: 0;
    }
  }
`;
