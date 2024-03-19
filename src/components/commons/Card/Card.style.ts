import FONT from '@/styles/font';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 340px;
  height: 334px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0 rgba(0, 0, 0, 0.08);
  transition-duration: 0.3s;

  &:hover {
    background-color: #f0f6ff;
  }
`;

export const CardImage = styled.img`
  width: 340px;
  height: 200px;
`;

export const CardContentWrapper = styled.div`
  width: 340px;
  border-radius: 0px 0px 15px 15px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  text-align: left;
`;

export const CardStatus = styled.div`
  ${FONT.REGULAR_13};
  color: #666666;
`;

export const CardTitle = styled.div`
  width: 300px;
  height: 49px;
  overflow: hidden;
  ${FONT.REGULAR_16};
  color: #000000;
`;

export const CardDate = styled.div`
  ${FONT.REGULAR_14};
  color: #333333;
`;
