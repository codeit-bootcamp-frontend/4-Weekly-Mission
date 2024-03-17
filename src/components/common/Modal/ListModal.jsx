import ReactDom from "react-dom";
import * as S from "./ModalStyle";
import { CLOSE_BUTTON } from "../../../constnats/image";
import { AddModalButton } from "../Button/ButtonStyle";

const ListModal = ({ children, title, folderList }) => {
  return ReactDom.createPortal(
    <S.Background>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Text>링크주소</S.Text>
        {folderList.map((folder) => (
          <S.List key={folder.id}>
            {folder.name}
            {folder.link.count}
          </S.List>
        ))}
        <S.CloseButton src={CLOSE_BUTTON} alt="close" />
        <AddModalButton>{children}</AddModalButton>
      </S.Container>
    </S.Background>,
    document.getElementById("modal")
  );
};

export default ListModal;
