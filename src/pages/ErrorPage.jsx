import styled from "styled-components";

const CenterTitle = styled.h1`
  text-align: center;
  color: red;
`;

function ErrorPage() {
  return (
    <div>
      <CenterTitle>안 반가워! 안돼! 돌아가!</CenterTitle>
    </div>
  );
}

export default ErrorPage;
