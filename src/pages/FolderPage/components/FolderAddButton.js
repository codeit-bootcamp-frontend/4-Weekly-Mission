import styled from 'styled-components';
import addIcon from '../../../assets/addIcon.svg';
function FolderAddButton() {
  return (
    <StyledButton>
      <span>폴더추가</span>
      <img src={addIcon} alt="addIcon"></img>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background: var(--Linkbrary-white);
  cursor: pointer;

  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;
export default FolderAddButton;
