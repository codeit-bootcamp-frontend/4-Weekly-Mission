import styled from 'styled-components';
import ColorBox from '../ColorBox/ColorBox.styles';

export const NavbarLayout = styled.ol`
  display: flex;
  justify-content: start;
  gap: 1rem;
`;
export const NavbarItemBox = styled(ColorBox)`
  white-space: nowrap;
  height: 2rem;
`;
