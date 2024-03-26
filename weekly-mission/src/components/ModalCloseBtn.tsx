import * as S from "./ModalCloseBtn.styled";

interface CloseModalProps {
  onClick: () => void;
}

const ModalCloseBtn: React.FC<CloseModalProps> = ({ onClick }) => {
  return <S.CloseBtn onClick={onClick}></S.CloseBtn>;
};

export default ModalCloseBtn;
