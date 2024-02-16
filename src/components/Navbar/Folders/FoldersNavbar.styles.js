import styled from 'styled-components';
import ColorBox from '../../common/ColorBox/ColorBox.styles';

export const FoldersNavbarLayout = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const FoldersNavbarItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.6rem;
`;

export const FoldersNavbarItemBox = styled(ColorBox)`
  ${props => props.$isSelected && 'background: var(--color-primary); opacity:0.8;'}
  cursor:pointer;
  white-space: nowrap;
  height: 2rem;
  &:hover {
    opacity: 0.6;
  }
`;

export const FoldersNavbarAddButton = styled.button`
  display: flex;
  align-items: center;
  white-space: nowrap;
  background: none;
  color: var(--color-primary);
  font-size: 1.2rem;

  @media screen and (width <768px) {
    display: none;
  }
`;
