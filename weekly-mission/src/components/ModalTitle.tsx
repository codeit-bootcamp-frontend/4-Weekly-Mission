import * as S from "./ModalTitle.styled";

interface ModalTitleProps {
  children: string;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  return <S.ModalTitle>{children}</S.ModalTitle>;
};

export default ModalTitle;
