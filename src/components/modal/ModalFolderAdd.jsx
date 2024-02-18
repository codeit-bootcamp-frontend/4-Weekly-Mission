import ModalCategoryList from './ModalCategoryList';
import * as Styled from "./Modal.styled";

function ModalFolderAdd({ categoryListLoop }) {
  return (
    <>
      <ModalCategoryList categoryListLoop={categoryListLoop} />
      <Styled.ModalButtonBlue>추가하기</Styled.ModalButtonBlue>
    </>
  );
}

export default ModalFolderAdd;
