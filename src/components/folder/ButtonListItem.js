import styled from "styled-components";

const ButtonListItem = styled.button`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: ${({ isClick }) => (isClick ? `#6D6AFE` : `#FFF`)};
  color: ${({ isClick }) => (isClick ? `#FFF` : `#000`)};

  height: 35px;
  white-space: nowrap;
`;

export default ButtonListItem;
