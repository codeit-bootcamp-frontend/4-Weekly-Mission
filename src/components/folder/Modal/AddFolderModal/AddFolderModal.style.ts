import COLOR from '@/styles/color';
import FONT from '@/styles/font';
import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-height: 172px;
  overflow: auto;
`;

export const ButtonWrapper = styled.div<{ $checked: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  gap: 8px;
  cursor: pointer;
  transition: 0.3s;
  background-color: ${({ $checked }) => ($checked ? COLOR.Gray0 : COLOR.White)};
  &:hover {
    background-color: ${COLOR.Gray0};
  }
`;

export const FolderName = styled.div<{ $checked: boolean }>`
  ${FONT.REGULAR_16};
  color: ${({ $checked }) => ($checked ? COLOR.Primary : '#373740')};
`;

export const LinkName = styled.div`
  ${FONT.REGULAR_14};
  color: ${COLOR.Gray3};
`;

export const CheckIcon = styled(Image)`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 14px;
  height: 14px;
`;
