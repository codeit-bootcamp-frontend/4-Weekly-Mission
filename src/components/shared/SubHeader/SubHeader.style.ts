import styled from 'styled-components';
import FONT from '@/styles/font';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 60px;
  background-color: #f0f6ff;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 47px;
`;

export const ProfileName = styled.div`
  ${FONT.REGULAR_16}
  color: #000000;
  margin-top: -11px;
`;

export const FolderName = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 47.73px;
  text-align: center;
`;
