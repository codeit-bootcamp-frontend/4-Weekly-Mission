import styled from 'styled-components';
import ColorBox from '../ColorBox/ColorBox.styles';

export const NavbarLayout = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: start;
  gap: 0.4rem;
`;
export const NavbarItemBox = styled(ColorBox)`
  ${props => props.$isSelected && 'background: var(--color-primary); opacity:0.8;'}
  &:hover {
    opacity: 0.6;
  }
  height: 2rem;
`;
