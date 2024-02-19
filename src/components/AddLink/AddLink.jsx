import React from "react";
import styled from "styled-components";
import link from "../../assets/images/link.svg";

const AddLink = () => {
  return (
    <S.AddLinkSection>
      <S.AddLinkContainer>
        <S.ImageInputContainer>
          <S.LinkImg src={link} alt="link" />
          <S.InputStyle placeholder="링크를추가해보세요" type="text" />
        </S.ImageInputContainer>

        <S.AddButton>
          <S.TextStyle>추가하기</S.TextStyle>
        </S.AddButton>
      </S.AddLinkContainer>
    </S.AddLinkSection>
  );
};

export default AddLink;

const S = {
  AddLinkSection: styled.div`
    display: flex;
    padding: 24px 32px 40px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    background: var(--Linkbrary-bg, #f0f6ff);
  `,
  AddLinkContainer: styled.div`
    display: flex;
    width: 100%;
    padding: 8px 10px;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
    border-radius: 15px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);
  `,
  ImageInputContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  AddButton: styled.button`
    display: flex;
    width: 100px;
    height: 50px;
    padding: 10px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(
      --gra-purpleblue-to-skyblue,
      linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
    border: none;
  `,
  LinkImg: styled.img`
    width: 30px;
    height: 30px;
  `,
  InputStyle: styled.input`
    width: 100%;
    border: none;
    background: none;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--Linkbrary-primary-color, #6d6afe);
    &::placeholder {
      color: var(--Linkbrary-primary-color, #6d6afe);
    }
    &:focus {
      outline: none;
    }
  `,
  TextStyle: styled.span`
    color: var(--Grey-Light, #f5f5f5);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
};
