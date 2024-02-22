import styled from "styled-components";

const ButtonListItem = styled.button`
  display: flex;
  padding: 6px 12px;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: ${({ isClick }) => (isClick ? `#6D6AFE` : `#FFF`)};
  color: ${({ isClick }) => (isClick ? `#FFF` : `#000`)};
  font-size: 16px;
  height: 35px;
  white-space: nowrap;

  @media (max-width: 767px) {
    height: 30px;
    font-size: 14px;
    padding: 4px 10px;
  }
`;

export default ButtonListItem;
