import { ModalButtonBlue } from "@components/Modals/ModalElements/ModalButtonBlue";
import "./AddToFolder.css";
import { Modal } from "@components/Modals/Modal/Modal";
import * as S from "./AddToFolderStyled";
import { AddToFolderProps } from "interface/ModalProp";

export function AddToFolder({
  isOpenModal,
  handleModalClose,
  linkURL,
  data,
}: AddToFolderProps) {
  return (
    <Modal
      title="폴더에 추가"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <S.SelectLink>{linkURL}</S.SelectLink>
      <S.FolderListContainer>
        {data?.map((folder) => (
          <S.SelectFolder>
            <S.FolderName>{folder.name}</S.FolderName>
            <S.FolderCount>{folder.link.count}개 링크</S.FolderCount>
            <S.SelectFolderIcon />
          </S.SelectFolder>
        ))}
      </S.FolderListContainer>
      <ModalButtonBlue type="button">삭제하기</ModalButtonBlue>
    </Modal>
  );
}
