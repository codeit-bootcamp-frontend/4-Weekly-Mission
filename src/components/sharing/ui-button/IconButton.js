import React from "react";
import styled from "styled-components";

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const IconButton = ({ imageSrc, alt, URL }) => {
  return (
    <a href={URL} target="_blank" rel="noreferrer noopener">
      <Icon src={imageSrc} alt={alt} />
    </a>
  );
};

export default IconButton;
