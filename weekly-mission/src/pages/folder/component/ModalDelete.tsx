import * as S from "./ModalDelete.styled";
import ModalCloseBtn from "components/ModalCloseBtn";
import ModalTitle from "components/ModalTitle";
import ModalEditBtn from "components/ModalEditBtn";
import TargetName from "components/TargetName";
import { ModalDataType } from "typeStore";

interface Props {
  type: ModalDataType;
  dispatch: any;
}

const ModalDelete: React.FC<Props> = ({ type, dispatch }) => {
  return (
    <S.Modal $type={type.type}>
      <ModalCloseBtn onClick={() => dispatch({ state: false })} />
      <S.Wrap>
        <ModalTitle>{type.title}</ModalTitle>
        <TargetName>{type.deleteTarget}</TargetName>
      </S.Wrap>
      <ModalEditBtn linear={false}>삭제하기</ModalEditBtn>
    </S.Modal>
  );
};

export default ModalDelete;
