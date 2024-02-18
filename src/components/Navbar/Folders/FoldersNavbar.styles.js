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
  height: 2rem;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const FoldersNavbarAddButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: var(--color-primary);
  white-space: nowrap;
  background: none;

  @media screen and (width <768px) {
    display: none;
  }
`;
