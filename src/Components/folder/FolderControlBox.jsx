import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ControlerBox = styled.div`
  display: flex;
  gap: 12px;
`;

const Controler = styled.div`
  display: flex;
  gap: 4px;
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 14px;
  font-weight: 600;
`;

function FolderControlBox({ children, isSelected }) {
  return isSelected ? (
    ""
  ) : (
    <Container>
      {children}
      <ControlerBox>
        <Controler>
          <img src="/Icons/share.svg" alt="공유" />
          <p>공유</p>
        </Controler>
        <Controler>
          <img src="/Icons/pen.svg" alt="이름 변경" />
          <p>이름 변경</p>
        </Controler>
        <Controler>
          <img src="/Icons/delete.svg" alt="삭제" />
          <p>삭제</p>
        </Controler>
      </ControlerBox>
    </Container>
  );
}

export default FolderControlBox;
