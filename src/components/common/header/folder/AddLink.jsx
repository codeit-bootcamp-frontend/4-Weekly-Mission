import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';

const AddLink = () => {
  const handleOnClick = e => {
    e.preventDefault();
  };
  return (
    <StyledForm>
      <Icon src="/images/icons/linkIcon.png" alt="link icon" />
      <StyledInput
        type="text"
        className="link-add-box"
        placeholder="링크를 추가해 보세요"
      />
      <StyledButton className="folderLink" onClick={handleOnClick}>
        추가하기
      </StyledButton>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  position: relative;
  padding: 6rem 0 7rem;

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 2.4rem 0;
  }
`;
const Icon = styled.img`
  position: relative;
  left: 4rem;
  top: 0.5rem;
  width: 2rem;
  height: 2rem;
  @media (min-width: 375px) and (max-width: 767px) {
    top: 0.4rem;
    left: 3rem;
    width: 1.6rem;
    height: 1.6rem;
  }
`;
const StyledInput = styled.input`
  width: 80rem;
  height: 6.9rem;
  border-radius: 1.5rem;
  border: 0.1rem solid ${props => props.theme.primary_color};
  padding: 1.6rem 2rem 1.6rem 5.2rem;
  font-size: 1.6rem;
  @media (max-width: 1199px) {
    max-width: 70.4rem;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    max-width: 32.5rem;
    height: 5.3rem;
    padding: 0.8rem 3.6rem;
    font-size: 1.4rem;
  }
`;
const StyledButton = styled(Button)`
  position: relative;
  left: 71.5rem;
  bottom: 5.2rem;
  @media (max-width: 1199px) {
    left: 62.4rem;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    left: 25rem;
    bottom: 4.4rem;
  }
`;

export default AddLink;
