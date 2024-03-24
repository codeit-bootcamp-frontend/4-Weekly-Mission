import styled from "styled-components";
import noImage from "../../assets/no-image.svg";
import star from "../../assets/star.svg";

const ImageGroup = styled.div`
  position: relative;
  height: 20rem;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
`;

export const ImageCard = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ image }) => (image ? `url(${image})` : `url(${noImage})`)}
    no-repeat center/cover;
  transition: all 0.3s ease-in-out;
`;

const ButtonStar = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3.4rem;
  height: 3.4rem;
  background: url(${star}) no-repeat center/cover;
`;

const LinkImage = ({ image }) => (
  <ImageGroup>
    <ImageCard image={image} />
    <ButtonStar />
  </ImageGroup>
);

export default LinkImage;
