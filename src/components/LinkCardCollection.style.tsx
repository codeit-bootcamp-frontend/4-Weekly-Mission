import styled from "styled-components";

export const CardGridLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 25px 20px;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const CardBoxOriginPosition = styled.div`
  padding: 0;
  border: none;
  background-color: var(--LBrary-White);
  position: relative;
  width: 100%;
  height: 334px;
  max-width: 340px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);

  &a {
    text-decoration-line: none;
  }
`;

export const FavorStarButton = styled.button`
  display: flex;
  position: absolute;
  padding: 0;
  background-color: transparent;
  border: none;
  top: 15px;
  right: 15px;
  width: 34px;
  height: 34px;
`;

export const CardWrapper = styled.section`
  a {
    text-decoration-line: none;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 325px;
    max-width: 327px;

    div {
      border-radius: 15px 15px 0 0;
      height: 192px;
    }
  }

  &:hover {
    section {
      background-color: var(--LBrary-Background);
    }

    div {
      background-size: 130%;
    }
  }
`;

export const CardImageDiv = styled.div<{ $image?: string }>`
  border-radius: 15px 15px 0 0;
  height: 200px;
  background-position-x: center;
  background-position-y: center;
  background-color: #dddfff;
  background-repeat: no-repeat;

  background-image: url(${({ $image }) =>
    $image
      ? `${$image}); background-size: cover`
      : `${process.env.PUBLIC_URL}/no-img-card.svg)`};;;;;;;;
`;

//
//  background-size: 133px 24px"};

export const TextSection = styled.section`
  border-radius: 0 0 15px 15px;
  display: block;
  text-align: left;
  padding: 15px 20px;
  height: 135px;

  @media (max-width: 767px) {
    border-radius: 0 0 15px 15px;
    display: block;
    text-align: left;
    padding: 15px 20px;
  }
`;

export const TextPassedTime = styled.caption`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: none;
  text-wrap: nowrap;
`;

export const TextLinkDescription = styled.p`
  margin: 10px auto;
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  max-height: 49px;
  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-decoration-line: none;
`;

export const TextLinkCreatedDate = styled.caption`
  overflow: hidden;
  color: #333;

  text-overflow: ellipsis;
  white-space: nowrap;
  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: none;
`;
