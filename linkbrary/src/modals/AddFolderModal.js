import styled from "styled-components";

function AddFolderModal() {
  return (
    <AddFolder>
      <AddFolderInput placeholder="내용 입력"></AddFolderInput>
      <AddButton>추가하기</AddButton>
    </AddFolder>
  );
}

const AddFolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 24px;
  gap: 15px;
`;

const AddFolderInput = styled.input`
  font-size: 16px;
  padding: 18px 15px;
  border: 1px solid #ccd5e3;
  border-radius: 8px;
`;

const AddButton = styled.button`
  display: flex;
  width: 280px;
  height: 51px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export default AddFolderModal;
