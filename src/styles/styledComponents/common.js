import styled from 'styled-components';
import { COLOR } from '../color';

export const Nav = styled.div`
  background-color: ${COLOR.Gray5};
  position: ${({ $navStatus }) => ($navStatus ? 'sticky' : 'static')};
  top: 0;
  z-index: 3;
  gap: 8px;
  padding: 20px 200px;

  @media (max-width: 1199px) {
    padding: 33px 32px;
  }

  @media (max-width: 767px) {
    padding: 13px 32px;
  }
`;

export const Button = styled.a`
  display: inline-block;
  background-image: linear-gradient(90deg, ${COLOR.Primary}, #6ae3fe);
  border-radius: 8px;
  padding: 16px 20px;
  line-height: 21.48px;
  gap: 10px;
  text-align: center;
  vertical-align: auto;
  color: #f5f5f5;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Pretendard', 'Noto Sans';
`;

export const PopOverWrapper = styled.div`
  position: relative;
`;

export const PopOver = styled.div`
  position: absolute;
  width: 100px;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);
`;

export const PopOverButton = styled.div`
  position: relative;
  padding: 7px 12px;
  color: #333236;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 16.71px;
  font-weightL 400;
  text-align: center;
  z-index: 1000;

  &:hover {
    background-color: #E7EFFB;
    color: ${COLOR.Primary};
  }
`;
