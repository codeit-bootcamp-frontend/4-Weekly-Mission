import React from 'react';
import styled from 'styled-components';
import kebabIcon from '../../assets/icons/kebab.svg';

const StyledKebab = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const KebabIcon = ({ onClick }) => (
  <StyledKebab src={kebabIcon} alt="더보기 메뉴" onClick={onClick} />
);

export default KebabIcon;
