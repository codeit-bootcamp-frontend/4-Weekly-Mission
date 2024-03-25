import styled from 'styled-components';

interface CardImageProps {
  $imgSrc: string;
  $icon: string;
}

export const CardBox = styled.div`
  display: grid;
  width: 66.25rem;
  grid-template-columns: repeat(3, 21.25rem);
  gap: 1.56rem 1.25rem;

  @media screen and (max-width: 1124px) {
    width: 44rem;
    grid-template-columns: repeat(2, 21.25rem);
    gap: 1.56rem 1.5rem;
  }

  @media screen and (max-width: 767px) {
    width: 20.3rem;
    grid-template-columns: repeat(1, 20.3rem);
    gap: 1.25rem 0;
  }
`;

export const Card = styled.a`
  width: 21.25rem;
  height: auto;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0.9375rem;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 20rem;
  }
`;
export const CardListEmpty = styled.div`
  text-align: center;
  padding: 2.56rem 0 2.19rem;
  width: 66.25rem;
  height: 21.6rem;
  font-size: 1rem;
  @media screen and (max-width: 1124px) {
    width: 44rem;
  }
  @media screen and (max-width: 767px) {
    width: 20.3125rem;
    padding: 0rem 5rem;
    font-size: 0.875rem;
    line-height: 6.25rem;
  }
`;

export const StarIcon = styled.img`
  position: absolute;
  top: 0.94rem;
  right: 0.94rem;
  z-index: 1;
`;

export const CardImgBox = styled.figure<CardImageProps>`
  height: 15.85913rem;
  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  overflow: hidden;
  background: ${({ $imgSrc, $icon }) => ($imgSrc ? `#ffffff` : `#dddfff url(${$icon}) no-repeat center`)};
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: #ccd5e3;

  &:hover {
    transform: scale(1.3);
    transition: 0.7s;
  }

  display: ${({ src }) => (src ? 'block' : 'none')};
`;

export const CardInfo = styled.div`
  padding: 0.94rem 1.25rem;
  height: auto;
  border-radius: 0rem 0rem 0.9375rem 0.9375rem;

  ${Card}:hover & {
    transition: 0.5s;
    background-color: var(--Linkbrary-bg);
  }
`;

export const CardInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const CardTimeDiff = styled.p`
  color: #666666;
  font-size: 0.8125rem;
`;

export const KebabListBox = styled.ul`
  position: absolute;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  top: 1rem;
  right: -5rem;
  background: #fff;
  z-index: 99;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  @media screen and (max-width: 767px) {
    right: 0rem;
  }
`;

export const KebabList = styled.li`
  font-size: 0.875rem;
  width: 5.8rem;
  padding: 0.44rem 0.75rem;

  &:hover {
    background-color: #e7effb;
    color: #6d6afe;
  }
`;

export const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.62rem 0;
  height: 3.0625rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardDate = styled.time`
  color: #333333;
  font-size: 0.875rem;
  height: 1.1875rem;
`;
