import React from 'react';
import styled from 'styled-components';

interface CardErrorProps {
  description: string;
}
const CardError: React.FC<CardErrorProps> = ({ description }) => {
  return (
    <StyledError>
      <div className="description">{description}</div>
    </StyledError>
  );
};
// 😰 저장된 링크가 없습니다.
const StyledError = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 3rem auto;
  padding: 1rem 2rem;
  .description {
    margin: 0 auto;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.gray100};
  }
`;
export default CardError;
