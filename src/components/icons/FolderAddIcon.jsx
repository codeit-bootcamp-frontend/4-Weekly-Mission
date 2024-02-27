import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Add } from '../../assets/icons/add.svg';

const FolderAddIcon = ({ text, onClick }) => {
  return (
    <IconContainer onClick={onClick}>
      <IconText>{text}</IconText>
      <Add />
    </IconContainer>
  );
};

export default FolderAddIcon;

const IconContainer = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border: none;
  background-color: #fff;
  color: #6d6afe;
  fill: #6d6afe;
  cursor: pointer;

  @media (max-width: 767px) {
    position: fixed;
    bottom: 101px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #6d6afe;
    color: white;
    fill: white;
    padding: 12px 16px;
    border-radius: 28px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 100;
    width: fit-content;
  }
`;

const IconText = styled.span`
  margin-right: 8px;
`;
