import React from 'react';
import Button from '../Button';
import styled from 'styled-components';

/**
 *
 * @param {Object} props
 * @param {string} props.title 모달 제목
 * @param {string} props.placeholder
 * @param {boolean} props.isAdd '폴더 추가' 모달인지 유무 결정
 * @returns
 */
const PostModal = ({ title, placeholder = '내용 입력', isAdd }) => {
  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <StyledForm>
        <StyledInput placeholder={placeholder} />
        <Button className="modal">{isAdd ? '추가하기' : '변경하기'}</Button>
      </StyledForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  gap: 0.8rem;
`;
const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem auto;
`;
const StyledForm = styled.form`
  width: 28rem;
  height: 12.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 1.8rem 1.5rem;
  border: 0.1rem solid ${({ theme }) => theme.gray20};
  border-radius: 0.8rem;
`;
export default PostModal;
