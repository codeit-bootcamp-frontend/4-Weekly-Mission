import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--color-gray4);
`;
const ActionIcon = ({ imageSrc, iconTitle }) => {
  return (
    <Icon>
      <img src={imageSrc} alt={iconTitle} />
      {iconTitle}
    </Icon>
  );
};

export default ActionIcon;
