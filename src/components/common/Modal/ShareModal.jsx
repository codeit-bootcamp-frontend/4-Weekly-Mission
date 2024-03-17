import ReactDom from "react-dom";
import * as S from "./ModalStyle";
import { CLOSE_BUTTON } from "../../../constnats/image";

const ShareModal = ({ folderName }) => {
  return ReactDom.createPortal(
    <S.Background>
      <S.Container>
        <S.Title>폴더 공유</S.Title>
        <S.Text>{folderName}</S.Text>
        <S.IconBox>dds</S.IconBox>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" />
      </S.Container>
    </S.Background>,
    document.getElementById("modal")
  );
};

export default ShareModal;
