import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLoginLink = styled(Link)`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  width: 128px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  flex-shrink: 0;

  color: #ffffff;

  @media (max-width: 1199px) {
    margin-right: 0;
    margin-left: auto;
  }
  @media (max-width: 767px) {
    display: flex;
    width: 80px;
    padding: 10px 16px;

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    text-decoration: none;
  }
`;

export default StyledLoginLink;
