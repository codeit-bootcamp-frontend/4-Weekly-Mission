import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Star } from '../../assets/icons/star.svg';

const StyledStar = styled(Star)`
  fill: ${props => (props.$isFavorited ? 'yellow' : 'none')};
  cursor: pointer;
`;

/** 아직 svg 이벤트가 없음 current로 설정하지 않음 */
const StarIcon = ({ isFavorited: isFavoritedProp }) => {
  const [isFavorited, setIsFavorited] = useState(isFavoritedProp);
  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <StyledStar $isFavorited={isFavorited} onClick={handleToggleFavorite} />
  );
};

export default StarIcon;
