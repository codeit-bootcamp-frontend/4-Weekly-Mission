import styled from "styled-components";

const LiWrapper = styled.div`
  & li {
    display: inline-block;
    padding: 8px 12px;
    border: 1px solid #6d6afe;
    border-radius: 5px;
    margin-right: 8px;
    font-size: 1rem;
    line-height: 1rem;

    &:hover {
      background-color: #6d6afe;
      color: white;
      cursor: pointer;
    }

    ${({ selected }) =>
      selected
        ? `background-color: #6d6afe;
  color: white;
  `
        : `background-color: white;`}
  }
`;

export default LiWrapper;
