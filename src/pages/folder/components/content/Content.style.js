import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 140px;
  margin: 40px 0px 60px 0;

  .card-box {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }

  /* tablet 화면 너비가 1124px 이하인 경우 */
  @media screen and (max-width: 1124px) {
    .card-box {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* mobile 화면  */
  @media screen and (min-width: 375px) and (max-width: 767px) {
    .card-box {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  /* tablet & mobile */
  @media screen and (min-width: 375px) and (max-width: 1199px) {
    padding: 32px;
  }
`;

export const NoLinks = styled.div`
  display: flex;
  height: 6.25rem;
  padding: 2.5625rem 0rem 2.1875rem 0rem;
  justify-content: center;
  align-items: center;
`;

export const FolderBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .folders {
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;

    .button {
      display: flex;
      padding: 8px 12px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 35px;

      border-radius: 5px;
      border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
      background: #fff;

      .text {
        color: #000;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
      }
    }

    .active {
      border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
      background: var(--Linkbrary-primary-color, #6d6afe);

      .text {
        color: #fff;
      }
    }
  }

  .add-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    .text {
      color: #6d6afe;
      text-align: center;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.01875rem;
    }
    .icon {
      width: 16px;
      height: 16px;
    }
  }

  /* mobile 화면  */
  @media screen and (min-width: 375px) and (max-width: 767px) {
    .floating {
      position: absolute;
      display: flex;
      width: 100vw;
      justify-content: center;
    }
    .add-btn {
      position: fixed;
      bottom: 110px;
      border-radius: 40px;
      padding: 8px 24px;
      border: 1px solid var(--Linkbrary-white, #fff);
      background: var(--Linkbrary-primary-color, #6d6afe);
      color: orange;

      height: 35px;
      .text {
        color: var(--Linkbrary-gray10, #e7effb);
        text-align: center;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.3px;
      }
      .icon {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

export const CurrFolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    color: #000;

    /* Linkbrary/h3-semibold */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.0125rem;
    margin: 0;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    .button {
      display: flex;
      flex-direction: row;
      gap: 0.25rem;
      justify-content: center;
      align-items: center;

      .icon {
        width: 18px;
        height: 18px;
      }
      .text {
        color: var(--Linkbrary-gray60, #9fa6b2);

        /* Linkbrary/body2-semibold */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;

        white-space: nowrap;
      }
    }
  }
`;
