import React from "react";
import styled from "styled-components";
import Button from "../../sharing/Button";

const Image = styled.img`
  position: absolute;
  left: 20px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const AddLinkFormContainer = styled.div`
  position: relative;
  width: 60%;
  margin: auto;
  text-align: center;

  ${Image} {
    top: 28%;
  }

  ${Input} {
    padding: 20px 104px 20px 50px;

    background-color: var(--color-white);

    border: 1px solid var(--color-primary);
    border-radius: 15px;
  }

  //모바일, 태블릿 사이즈
  @media (min-width: 375px) and (max-width: 1124px) {
    width: 100%;
  }
`;

const AddLinkButton = styled(Button)`
  position: absolute;
  top: 20%;
  bottom: 20%;
  right: 2%;

  padding: 10px 16px;
`;

const AddLinkForm = () => {
  return (
    <AddLinkFormContainer>
      <Image src="/assets/icons/link.svg" alt="link icon" />
      <AddLinkButton variant="gradient">추가하기</AddLinkButton>
      <Input type="text" placeholder="링크를 추가해 보세요." />
    </AddLinkFormContainer>
  );
};

export default AddLinkForm;
