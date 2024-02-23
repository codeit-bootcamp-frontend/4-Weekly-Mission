import styled from 'styled-components';
function PopOver() {
  return (
    <PopOverContainer>
      <Button>삭제하기</Button>
      <Button>폴더에 추가</Button>
    </PopOverContainer>
  );
}

const PopOverContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const Button = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: var(--gray-light-gray-100, #333236);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background-color: white;
  &:hover {
    color: var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-gray10, #e7effb);
  }
`;
export default PopOver;
