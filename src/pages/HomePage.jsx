import { Link } from "react-router-dom";
import styled from "styled-components";

const CenterTitle = styled.h1`
  text-align: center;
`;

const ContainDiv = styled.div`
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  width: 100px;
  height: 80px;
`;

// 이동하면서 작업하기 편하게 이동용 임시 버튼 만듬.
function HomePage() {
  return (
    <div>
      <CenterTitle>안녕! 난 홈페이지야</CenterTitle>
      <ContainDiv>
        <Link to="/folder">
          <Button>Folder</Button>
        </Link>
        <Link to="/shared">
          <Button>Shared</Button>
        </Link>
        <Link to="/signin">
          <Button>Sign in</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
        <Link to="*">
          <Button>Error</Button>
        </Link>
      </ContainDiv>
    </div>
  );
}

export default HomePage;
