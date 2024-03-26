import React from 'react';
import { ButtonContainer } from './Button.style';

interface ButtonProps {
  padding?: string;
  width?: string;
  background?: string;
  fontSize?: string;
  children?: React.ReactNode;
  openModal?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ padding, width, background, fontSize, children, openModal }) => {
  return (
    <ButtonContainer
      $padding={padding}
      $width={width}
      $background={background}
      $fontSize={fontSize}
      onClick={openModal}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
