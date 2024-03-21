import COLOR from '@/styles/color';
import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 360px;
  border-radius: 15px;
  padding: 32px 40px;
  border 1px solid #DEE2E6;
  background-color: ${COLOR.White};
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 23.87px;
  color: #373740;
`;

export const ModalSubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${COLOR.Gray3};
`;

export const ModalButton = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 51px;
  padding: 16px 20px;
  gap: 10px;
  text-align: center;
  color: #f5f5f5;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.09px;
  border-radius: 8px;
  cursor: pointer;
  ${({ $color }) =>
    $color === 'blue'
      ? `background-image: linear-gradient(90deg, ${COLOR.Primary}, #6ae3fe)`
      : `background-color: #ff5b56`};
`;

export const ModalDeleteButton = styled.img`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
