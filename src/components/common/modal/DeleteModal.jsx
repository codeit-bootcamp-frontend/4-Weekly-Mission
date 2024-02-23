import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button';

const DeleteModal = ({ title, subTitle }) => {
  return (
    <Container>
      <StyledTitle>
        {title}
        <StyledSubTitle>{subTitle}</StyledSubTitle>
      </StyledTitle>
      <Button className="deleteModal">삭제하기</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
`;
const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
`;
const StyledSubTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.gray60};
`;
export default DeleteModal;
