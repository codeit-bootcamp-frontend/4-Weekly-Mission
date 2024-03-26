import * as S from "./ModalEditBtn.styled";

interface EditModalProps {
  children?: string;
  linear: boolean;
}

const ModalEditBtn: React.FC<EditModalProps> = ({ children, linear }) => {
  return <S.EditBtn $linear={linear}>{children}</S.EditBtn>;
};

export default ModalEditBtn;
