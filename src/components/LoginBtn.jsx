import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomBtn = styled.button`
  display: flex;
  width: 80px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 8px;
  background: var(
    --Linkbrary-gradation,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media ${(props) => props.theme.tabletS} {
    width: 128px;
    padding: 16px 20px;
    font-size: 14px;
  }
`;

const NoLineLink = styled(Link)`
  text-decoration: none;
  color: #f5f5f5;
`;

function LoginBtn() {
  return (
    <NoLineLink to="/signin">
      <CustomBtn>로그인</CustomBtn>
    </NoLineLink>
  );
}

export default LoginBtn;
