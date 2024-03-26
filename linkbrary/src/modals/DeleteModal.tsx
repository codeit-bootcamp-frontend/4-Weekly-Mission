import styled from "styled-components";

interface DeleteModalProps {
  title?: string;
  link?: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ title, link }) => {
  return (
    <DeleteContent>
      <DeleteArea>{link}</DeleteArea>
      <DeleteButton>삭제하기</DeleteButton>
    </DeleteContent>
  );
};

const DeleteContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  gap: 1.5rem;
  align-items: center;
`;

const DeleteArea = styled.div`
  color: #9fa6b2;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`;

const DeleteButton = styled.button`
  width: 280px;
  height: 51px;
  border: none;
  border-radius: 8px;
  background-color: rgb(255 91 86 / 100%);
  color: white;
`;

export default DeleteModal;
