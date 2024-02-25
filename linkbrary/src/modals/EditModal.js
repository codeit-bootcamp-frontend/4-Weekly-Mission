import styled from "styled-components";

function EditModal() {
  return (
    <EditContent>
      <EditInput placeholder="내용 입력"></EditInput>
      <EditButton>변경/추가하기</EditButton>
    </EditContent>
  );
}

export default EditModal;

const EditContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1.5rem;
  gap: 1.5rem;
`;

const EditInput = styled.input`
  height: 3.75rem;
  padding: 0 1rem;
  border: 1px solid #ccd5e3;
  border-radius: 8px;
`;

const EditButton = styled.button`
  display: flex;
  width: 17.5rem;
  height: 51px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: white;
  cursor: pointer;
`;
