import { useState } from 'react';
import styled from 'styled-components';
function SortButton({ id, text }) {
  const [isclicked, setIsclicked] = useState(false);
  const handleClick = () => {
    setIsclicked(!isclicked);
  };
  return (
    <StyledButton onClick={handleClick} isclicked={isclicked}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  padding: 0.5rem 0.75rem;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: ${(props) =>
    props.isclicked
      ? 'var(--Linkbrary-primary-color)'
      : 'var(--Linkbrary-white)'}; // 배경색 변경
  color: ${(props) => (props.isclicked ? 'white' : 'black')}; // 글자색 변경
  cursor: pointer;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export default SortButton;
