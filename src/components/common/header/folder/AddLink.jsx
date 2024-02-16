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
  left: 40px;
  top: 5px;
  width: 20px;
  height: 20px;
  @media (min-width: 375px) and (max-width: 767px) {
    top: 4px;
    left: 30px;
    width: 16px;
    height: 16px;
  }
`;
const StyledInput = styled.input`
  width: 800px;
  height: 69px;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.primary_color};
  padding: 16px 20px 16px 52px;
  font-size: 16px;
  @media (max-width: 1199px) {
    max-width: 704px;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    max-width: 325px;
    height: 53px;
    padding: 8px 36px;
    font-size: 14px;
  }
`;
const StyledButton = styled(Button)`
  position: relative;
  left: 715px;
  bottom: 52px;
  @media (max-width: 1199px) {
    left: 624px;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    left: 250px;
    bottom: 44px;
  }
`;

export default AddLink;
