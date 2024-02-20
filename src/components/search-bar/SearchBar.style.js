import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .icon {
    position: relative;
    left: 35px;
  }

  .search-bar {
    background-color: #f5f5f5;
    width: 100%;
    height: 54px;
    border-radius: 10px;
    border: none;

    color: var(--Text, #666);

    /* Linkbrary/body1-regular */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
