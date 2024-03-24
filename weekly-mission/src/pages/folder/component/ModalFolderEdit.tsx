import ModalEditBtn from "components/ModalEditBtn";
import ModalCloseBtn from "components/ModalCloseBtn";
import ModalTitle from "components/ModalTitle";
import * as S from "./ModalFolderEdit.styled";
import { ModalDataType } from "typeStore";

interface Props {
  type: ModalDataType;
  dispatch: any;
}

const ModalFolderEdit: React.FC<Props> = ({ type, dispatch }) => {
  return (
    <S.Modal $type={type.type}>
      <ModalCloseBtn onClick={() => dispatch({ state: false })} />
      <ModalTitle>{type.title}</ModalTitle>
      <S.Wrap>
        <S.UserInput type="text" placeholder={type.placeHolder}></S.UserInput>
        <ModalEditBtn linear>{type.buttonText}</ModalEditBtn>
      </S.Wrap>
    </S.Modal>
  );
};

export default ModalFolderEdit;
