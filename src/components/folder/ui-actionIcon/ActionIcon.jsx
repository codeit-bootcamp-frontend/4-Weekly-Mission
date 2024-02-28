import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--color-gray4);

  cursor: pointer;
`;
const ActionIcon = ({ imageSrc, iconTitle, onClick }) => {
  return (
    <Icon onClick={onClick}>
      <img src={imageSrc} alt={iconTitle} />
      {iconTitle}
    </Icon>
  );
};

export default ActionIcon;
