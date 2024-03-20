import COLOR from '@/styles/color';
import FONT from '@/styles/font';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  overflow: visible;
`;

export const KebabButton = styled.img`
  width: 21px;
  height: 17px;
`;

export const SelectWrapper = styled.div`
  position: absolute;
  left: 0px;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);
  z-index: 1;
`;

export const SelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 31px;
  padding: 7px 12px;
  ${FONT.REGULAR_14};
  color: #333236;
  background-color: ${COLOR.White};

  &:hover {
    background-color: ${COLOR.Gray1};
    color: ${COLOR.Primary};
  }
`;
