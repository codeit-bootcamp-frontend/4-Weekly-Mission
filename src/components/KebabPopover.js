import styled from "styled-components";

const PopoverContainer = styled.div`
  margin: 0;
  position: absolute;
  right: -55px;
  top: 30px;
  z-index: 1;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);
  background: white;
`;

const PopoverList = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;
  cursor: pointer;
  row-gap: 0.2rem;
  padding: 0.5rem 1rem;

  &:hover {
    background: var(--gray5-color);
    color: var(--primary-color);
`;

const KebabPopover = () => {
  return (
    <PopoverContainer>
      <PopoverList>삭제하기</PopoverList>
      <PopoverList>폴더에 추가</PopoverList>
    </PopoverContainer>
  );
};
export default KebabPopover;
