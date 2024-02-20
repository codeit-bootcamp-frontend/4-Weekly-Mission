import styled from "styled-components";

const LiWrapper = styled.div`
  & .selected {
    background-color: #6d6afe;
    color: white;
  }

  & li {
    display: inline-block;
    padding: 8px 12px;
    border: 1px solid #6d6afe;
    border-radius: 5px;
    margin: 0 8px 12px 0;
    font-size: 1rem;
    line-height: 1rem;

    &:hover {
      background-color: #6d6afe;
      color: white;
      cursor: pointer;
    }
  }
`;

export default LiWrapper;
