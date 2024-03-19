import COLOR from '@/styles/color';
import FONT from '@/styles/font';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FolderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.div`
  border-radius: 5px;
  border: 1px solid ${COLOR.Primary};
  padding: 8px 12px;
  ${FONT.REGULAR_16};
  line-height: 19px;
  color: #000000;
  cursor: pointer;
`;

export const AddFolderWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 767px) {
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translateX(-50%);
    width: 127px;
    height: 35px;
    border-radius: 20px;
    border 1px solid ${COLOR.White};
    padding: 8px 24px;
    background-color: ${COLOR.Primary};
  }
`;

export const AddFolderText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;
  letter-spacing: -0.3px;
  text-align: center;
  color: ${COLOR.Primary};

  @media (max-width: 767px) {
    color: ${COLOR.Gray1};
  }
`;

export const AddFolderIcon = styled.img`
  width: 16px;
  height: 16px;
  @media (max-width: 767px) {
    filter: brightness(0) invert(1);
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer: @media (max-width: 767px) {
    flex-direction: column;
    align-items: initial;
    gap: 12px;
  }
`;

export const FolderTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: -0.2px;
  color: #000000;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const OptionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const OptionIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const OptionText = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  text-align: left;
  color: ${COLOR.Gray3};
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 19px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;
