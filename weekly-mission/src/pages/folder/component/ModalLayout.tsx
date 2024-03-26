import ModalFolderEdit from "./ModalFolderEdit";
import ModalDelete from "./ModalDelete";
import ModalShare from "./ModalShare";
import ModalLinkAdd from "./ModalLinkAdd";
import * as S from "./ModalLayout.styled";
import { CategoryDataType } from "typeStore";

interface ModalLayoutProps {
  modalState: any;
  dispatch: any;
  folderList: CategoryDataType[];
}

const ModalLayout: React.FC<ModalLayoutProps> = ({
  modalState,
  dispatch,
  folderList,
}) => {
  return (
    <S.Layout $state={modalState.state}>
      <ModalFolderEdit type={modalState} dispatch={dispatch} />
      <ModalDelete type={modalState} dispatch={dispatch} />
      <ModalShare type={modalState} dispatch={dispatch} />
      <ModalLinkAdd
        type={modalState}
        dispatch={dispatch}
        folderList={folderList}
      />
    </S.Layout>
  );
};

export default ModalLayout;
