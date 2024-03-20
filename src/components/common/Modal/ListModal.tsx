import ReactDom from "react-dom";
import * as S from "./ModalStyle";
import { CLOSE_BUTTON } from "../../../constnats/image";
import { AddModalButton } from "../Button/ButtonStyle";
import { ReactNode } from "react";
import { Folder } from "../../../constnats/types";

interface Props {
  children: ReactNode;
  title: string;
  folderList: Folder[];
  onClose?: () => void;
}

const ListModal = ({ children, title, folderList, onClose }: Props) => {
  return ReactDom.createPortal(
    <S.Background onClick={onClose}>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Text>링크주소</S.Text>
        {folderList.map((folder) => (
          <S.List key={folder.id}>
            {folder.name}
            {folder.link?.count}
          </S.List>
        ))}
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
        <AddModalButton>{children}</AddModalButton>
      </S.Container>
    </S.Background>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ListModal;
