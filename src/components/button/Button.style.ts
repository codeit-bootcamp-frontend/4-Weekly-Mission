import styled from 'styled-components';

interface Container {
  $padding?: string;
  $width?: string;
  $background?: string;
  $fontSize?: string;
}

export const ButtonContainer = styled.button<Container>`
  padding: ${({ $padding }) => $padding ?? '16px 20px'};
  width: ${({ $width }) => $width};
  background: ${({ $background }) => $background ?? ' linear-gradient(90deg, #6D6AFE 0%, #6ae3fe 100%)'};
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: ${({ $fontSize }) => $fontSize ?? '1.8rem'};
  font-weight: 600;
  white-space: nowrap;
`;
