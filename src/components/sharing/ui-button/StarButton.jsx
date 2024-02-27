import React from "react";
import styled from "styled-components";

const StarIcon = styled.button`
  position: absolute;
  right: 4%;
  top: 10px;

  border: none;
  background: none;

  opacity: 0.7;
`;
const StarButton = ({ alt, onClick }) => {
  return (
    <StarIcon type="button" onClick={onClick}>
      <img src="/icons/star_icon.svg" alt={alt} />
    </StarIcon>
  );
};

export default StarButton;
