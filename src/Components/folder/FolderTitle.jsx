import styled from "styled-components";

const Title = styled.h2`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

function FolderTitle({ title }) {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
}

export default FolderTitle;
