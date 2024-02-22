import styled from 'styled-components';
import noImage from '../../assets/no-image.svg';
import star from '../../assets/star.svg';

const ImageGroup = styled.div`
  position: relative;
  height: 20rem;
  overflow: hidden;
`;

const ImageCard = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ image }) => (image ? `url(${image})` : `url(${noImage})`)} no-repeat center/cover;
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
