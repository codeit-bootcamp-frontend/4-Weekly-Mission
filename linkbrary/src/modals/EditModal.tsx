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
  padding: 18px 15px;
  border: 1px solid #ccd5e3;
  border-radius: 8px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const EditButton = styled.button`
  display: flex;
  width: 280px;
  height: 51px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: white;
  cursor: pointer;
`;
