import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export const IconWrapper = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 37.33px;
  background-color: ${({ $color }) => $color};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export const IconName = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  text-align: center;
  color: #373740;
`;
