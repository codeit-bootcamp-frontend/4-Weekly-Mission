import styled from "styled-components";
import StarButton from "../../sharing/ui-button/StarButton";
import KebobButton from "../../sharing/ui-button/KebobButton";
import { Link } from "react-router-dom";

const SAMPLE_IMAGE_URL = "/images/sample_image.svg";

const CardContainer = styled.div`
  width: 100%;
  height: auto;

  box-shadow: 0 5px 25px 0 #00000014;
  border-radius: 15px;
`;

const ImageContainer = styled.div`
  position: relative;

  height: 200px;
  width: 100%;
  object-fit: cover;

  border-radius: 15px 15px 0 0;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.3);
  }
`;

const TextContainer = styled.div`
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: left;

  padding: 15px 20px;

  position: relative;
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
`;

const Contents = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  color: var(--color-black);
  font-size: 16px;
  font-weight: 400;
`;

const CardStarButton = styled(StarButton)`
  position: absolute;
  right: 5%;
  top: 20px;

  opacity: 0.7;
`;
const Card = ({ id, cardImage, cardTime, cardDescription, cardUrl }) => {
  const imageSrc = cardImage || SAMPLE_IMAGE_URL;

  return (
    <CardContainer>
      <Link
        to={`/link/${id}`}
        key={id}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageContainer>
          <Image src={imageSrc} alt="card profile" />
          <CardStarButton
            alt="add this link to favorite"
            onClick={(e) => {
              e.preventDefault();
              alert("Add to Favorite");
            }}
          />
        </ImageContainer>
      </Link>
      <TextContainer>
        <OptionContainer>
          <span className="font-thin font-13px" style={{ color: "#666666" }}>
            {cardTime["timeDifference"]}
          </span>
          <KebobButton linkUrl={cardUrl} />
        </OptionContainer>
        <Contents>{cardDescription}</Contents>
        <div className="font-thin font-14px" style={{ color: "#333333" }}>
          {cardTime["createdDateString"]}
        </div>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
