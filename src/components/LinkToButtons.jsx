import { Link } from "react-router-dom";
import styled from "styled-components";

export function LinkToButtons() {
  // 메인화면에서 folder 및 Shared페이지를 확인하기 위해 임시로 만든 컴포넌트
  return (
    <div>
      <Link to="/shared">
        {" "}
        <Button>shared</Button>
      </Link>
      <Link to="/folder">
        {" "}
        <Button>folder</Button>
      </Link>
    </div>
  );
}

const Button = styled.button`
  padding: 0.5rem 0.75rem;
  font-weight: 400;
  line-height: 1.193125rem;
  border: 0.0625rem solid var(--primary);
  border-radius: 0.3125rem;

  &:hover,
  &:active {
    background-color: var(--primary);
    color: #fff;
  }
`;
