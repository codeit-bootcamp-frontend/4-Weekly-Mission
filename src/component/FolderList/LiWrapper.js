import styled from "styled-components";

const LiWrapper = styled.div`
  & li {
    display: inline-block;
    padding: 8px 12px;
    border: 1px solid #6d6afe;
    border-radius: 5px;
    margin: 0 8px 12px 0;
    font-size: 1rem;
    line-height: 1rem;

    &.selected {
      background-color: #6d6afe;
      color: white;
    }

    &:hover {
      background-color: #6d6afe;
      color: white;
      cursor: pointer;
    }
  }
`;

export default LiWrapper;
