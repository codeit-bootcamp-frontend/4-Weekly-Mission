import styled from 'styled-components';
import ColorBox from '../../common/ColorBox/ColorBox.styles';

export const FoldersNavbarLayout = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const FoldersNavbarItemsBox = styled.div`
  display: flex;
  column-gap: 0.6rem;
`;

export const FoldersNavbarItemBox = styled(ColorBox)`
  ${props => props.$isSelected && 'background: var(--color-primary); opacity:0.8;'}
  white-space:nowrap;
  height: 2rem;
  &:hover {
    opacity: 0.6;
  }
`;

export const FoldersNavbarAddButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  color: var(--color-primary);
  font-size: 1.2rem;
`;
