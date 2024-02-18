import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;

  & img {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  & input {
    padding: 1.5rem 1.6rem;
    background-color: #f5f5f5;
    width: 100%;
    height: 54px;
    border-radius: 10px;
    border: none;
    padding-left: 52px;
    padding-right: 60px;
  }
`;
