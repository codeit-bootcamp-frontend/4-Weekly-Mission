import ReactDom from "react-dom";
import * as S from "./ModalStyle";
import { CLOSE_BUTTON } from "../../../constnats/image";
import { ReactNode } from "react";

interface Props {
  title: string;
  folderName: string;
  onClose?: () => void;
}

const ShareModal = ({ folderName, onClose }: Props) => {
  return ReactDom.createPortal(
    <S.Background onClick={onClose}>
      <S.Container>
        <S.Title>폴더 공유</S.Title>
        <S.Text>{folderName}</S.Text>
        <S.IconBox>dds</S.IconBox>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      </S.Container>
    </S.Background>,
    document.getElementById("modal") as HTMLElement
  );
};

export default ShareModal;
