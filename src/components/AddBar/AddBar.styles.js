import styled from 'styled-components';
import { HiOutlineLink } from 'react-icons/hi';
import ColorBox from '../common/ColorBox/ColorBox.styles';
import GradientButton from '../common/GradientButton/GradientButton.styles';

export const AddBarColorBox = styled(ColorBox)`
  width: 100%;
`;

export const AddBarLineLink = styled(HiOutlineLink)`
  font-size: 1.4rem;
  color: var(--color-primary);
`;

export const AddBarInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  background: #f5f5f5;
  outline: none;
`;

export const AddBarButton = styled(GradientButton)`
  height: 2.4rem;
`;
