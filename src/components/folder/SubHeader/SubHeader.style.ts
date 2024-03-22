import COLOR from '@/styles/color';
import FONT from '@/styles/font';
import styled from 'styled-components';

interface WrapperProps {
  $fix: boolean;
  $viewFooter: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: ${({ $viewFooter }) => ($viewFooter ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  padding: 60px 0 90px;
  background-color: ${COLOR.Gray0};
  z-index: 100;

  ${({ $fix }) =>
    $fix
      ? `
  position: fixed;
  bottom: 0;
  padding: 24px 0;
  `
      : 'position: relative;'}
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 69px;

  @media (max-width: 1199px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 325px;
    height: 53px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 1px solid ${COLOR.Primary};
  ${FONT.REGULAR_16}
  color: #9FA6B2;
  padding: 16px 115px 16px 55px;
  outline: none;

  @media (max-width: 767px) {
    padding: 16px 100px 16px 40px;
    ${FONT.REGULAR_14}
  }
`;

export const ImageIcon = styled.img`
  position: absolute;
  top: 24px;
  left: 20px;
  width: 20px;
  height: 20px;

  @media (max-width: 767px) {
    top: 18px;
    left: 15px;
    width: 18px;
    height: 18px;
  }
`;

export const AddButton = styled.div`
  position: absolute;
  top: 16px;
  right: 20px;
  background-image: linear-gradient(90deg, ${COLOR.Primary}, #6ae3fe);
  width: 83px;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16.71px;
  color: #f5f5f5;
  cursor: pointer;

  @media (max-width: 767px) {
    top: 8px;
    right: 10px;
  }
`;
