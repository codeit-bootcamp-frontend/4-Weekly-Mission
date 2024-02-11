import React from 'react';
import styled from 'styled-components';

const Error = () => {
  return (
    <StyledError>
      <div className="emoji">😰</div>
      <div className="description">데이터를 불러오는데 실패하였습니다.</div>
    </StyledError>
  );
};

const StyledError = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 30px auto;
  padding: 10px 20px;
  background-color: rgb(253, 235, 236);
  .emoji {
    font-size: 20px;
    padding: 10px;
  }
  .description {
    font-size: 16px;
    font-weight: 500;
    color: #ff2828;
  }
`;
export default Error;
