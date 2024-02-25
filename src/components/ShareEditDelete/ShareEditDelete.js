import React from "react";
import styled from "styled-components";

const ShareEditDelete = (props) => {
  const { openModal, isModalOpen, color } = props;
  return (
    <S.Container>
      <S.TextStyle>유용한글</S.TextStyle>
      <S.ButtonContainer>
        <button onClick={() => openModal(isModalOpen, color)}>공유</button>
        <button>수정</button>
        <button>삭제</button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ShareEditDelete;

const S = {
  Container: styled.div`
    display: flex;
    width: 325px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  `,

  TextStyle: styled.p`
    color: #000;

    /* Linkbrary/h4-semibold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.2px;
  `,

  ButtonContainer: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
  `,
};
