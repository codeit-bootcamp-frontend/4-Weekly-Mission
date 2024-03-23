import Modal from "./BaseModal";
import { AddModalButton } from "../Button/ButtonStyle";
import { CLOSE_BUTTON, CHECK } from "constants/image";
import { BaseModal, FolderList } from "constants/types";
import * as S from "./ModalStyle";

interface List extends BaseModal {
  folderList: FolderList[];
}

const ListModal = ({ children, title, folderList, onClose }: List) => {
  return (
    <Modal title={title}>
      <>
        <S.Text>링크주소</S.Text>
        <S.List>
          {folderList &&
            folderList.map((folder) => (
              <S.ListBox key={folder.id}>
                <S.ListText>
                  <S.FolderName>{folder.name}</S.FolderName>
                  <S.FolderCount>{`${folder.link?.count}개 링크`}</S.FolderCount>
                </S.ListText>
                <S.CheckImage src={CHECK} alt="check" />
              </S.ListBox>
            ))}
        </S.List>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
        <AddModalButton>{children}</AddModalButton>
      </>
    </Modal>
  );
};

export default ListModal;
