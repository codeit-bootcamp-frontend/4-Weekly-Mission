import styled from "styled-components";
import defaultCardImg from "../../assets/image/default_card_img.jpg";
import { formatDate, formatTimeAgo } from "../../utils/dateUtils";

import starIcon from "../../assets/svg/star.svg";
import selectedStarIcon from "../../assets/svg/selected_star.svg";
import kebabIcon from "../../assets/svg/kebab.svg";
import { createContext, useState } from "react";
import Dropdown from "../folder/Dropdown";

const Container = styled.div`
  width: 340px;
  height: 334px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.08);
  position: relative;
  a {
    text-decoration: none;
  }
`;

const CardImgWrapper = styled.div`
  width: 340px;
  height: 200px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
  img {
    width: 340px;
    height: 200px;
    object-fit: cover;
    transition: transform 0.4s ease;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

const CardContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 15px 20px;
  font-size: 14px;
  color: var(--gray1);
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 400;
  color: var(--black);
  color: ${({ $hasDescription }) =>
    $hasDescription ? "var(--black)" : "var(--gray3)"};
  height: 40px;
`;

const BaseButton = styled.button`
  position: absolute;
  background-color: transparent;
  z-index: 1;
  cursor: pointer;
  border: none;
  padding: 0;
`;

const StarButton = styled(BaseButton)`
  top: 15px;
  right: 15px;
  width: 30px;
`;

const KebabButton = styled(BaseButton)`
  top: 213px;
  right: 12px;
  width: 25px;
`;

export const CardLinkContext = createContext();

const Card = ({ link }) => {
  const { url, imageSource, image_source, description, createdAt, created_at } =
    link;

  const [active, setActive] = useState(false);
  const [view, setView] = useState(false);

  const handleStarClick = () => {
    setActive(!active);
  };

  return (
    <CardLinkContext.Provider value={{ url }}>
      <Container>
        <StarButton onClick={handleStarClick}>
          <img src={active ? selectedStarIcon : starIcon} alt="" />
        </StarButton>

        <KebabButton>
          <img
            src={kebabIcon}
            onClick={(e) => {
              e.stopPropagation();
              setView(!view);
            }}
            alt=""
          />
          {view && <Dropdown />}
        </KebabButton>

        <a href={url} target="_blank" rel="noreferrer">
          <CardImgWrapper>
            <img
              className="Card-img"
              src={imageSource || image_source || defaultCardImg}
              alt="카드 이미지"
            />
          </CardImgWrapper>
          <CardContentWrapper>
            <p>{formatTimeAgo(created_at)}</p>
            <Description $hasDescription={description}>
              {description || "No Description"}
            </Description>
            <p>{formatDate(createdAt || created_at)}</p>
          </CardContentWrapper>
        </a>
      </Container>
    </CardLinkContext.Provider>
  );
};

export default Card;
