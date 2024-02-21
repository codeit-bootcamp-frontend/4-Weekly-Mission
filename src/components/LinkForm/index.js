import React from "react";
import styled from "styled-components";
import addLink from "../../image/link.svg";

const LinkForm = () => {
  const LinkFormBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 32rem 9rem;
    background-color: var(--gray5);
    margin-bottom: 4rem;

    @media (min-width: 768px) and (max-width: 1199px) {
      padding: 6rem 3.25rem 9rem;
    }

    @media (min-width: 375px) and (max-width: 767px) {
      padding: 2.4rem 3.2rem 40rem;
    }
  `;

  const LinkFormWrapper = styled.form`
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    width: 80rem;
    height: 6.9rem;
    padding: 1.6rem 2rem;
    border-radius: 15px;
    border: 1px solid var(--primary);
    background: var(--white);

    @media (min-width: 768px) and (max-width: 1199px) {
      width: 67rem;
    }

    @media (min-width: 375px) and (max-width: 767px) {
      width: 32.5rem;
    }
  `;

  const LinkInput = styled.input`
    border: none;
    outline: none;
    padding: 1.6rem;
    width: 80rem;
    font-size: 1.6rem;

    ::placeholder {
      color: var(--gray2);
    }

    @media (min-width: 375px) and (max-width: 767px) {
      padding: 0.8rem;
      font-size: 1.4rem;
    }
  `;

  const AddLinkButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 10.7rem;
    height: 3.7rem;
    padding: 1rem 1.6rem;
    color: #f5f5f5;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    background: linear-gradient(91deg, var(--primary) 0.12%, #6ae3fe 101.84%);
  `;

  return (
    <LinkFormBox>
      <LinkFormWrapper>
        <img src={addLink} alt="add link" />
        <LinkInput type="text" placeholder="링크를 추가해 보세요" />
        <AddLinkButton>추가하기</AddLinkButton>
      </LinkFormWrapper>
    </LinkFormBox>
  );
};

export default LinkForm;
