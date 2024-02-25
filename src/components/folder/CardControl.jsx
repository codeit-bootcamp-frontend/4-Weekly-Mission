import share from "../../images/share.svg";
import pen from "../../images/pen.svg";
import Group from "../../images/Group 36.svg";
import styled from "styled-components";

const CardControlContainer = styled.div`
  margin: 24px auto;
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
const Warpper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export function CardControl() {
  return (
    <CardControlContainer>
      <h2>유용한 글</h2>
      <Container>
        <Warpper>
          <img alt="공유" src={share}></img>
          <p>공유</p>
        </Warpper>
        <Warpper>
          <img alt="이름변경" src={pen}></img>
          <p>이름 변경</p>
        </Warpper>
        <Warpper>
          <img alt="삭제" src={Group}></img>
          <p>삭제</p>
        </Warpper>
      </Container>
    </CardControlContainer>
  );
}
