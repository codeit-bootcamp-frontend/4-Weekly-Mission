import { ReactNode } from "react";
import ReactDom from "react-dom";
import { AddModalButton, DeleteModalButton } from "../Button/ButtonStyle";
import Icon from "../Icon/Icon";
import { CLOSE_BUTTON } from "constnats/image";
import { MODAL_ICON_LIST } from "constnats/list";
import { FolderList } from "constnats/types";
import * as S from "./ModalStyle";

interface BaseModal {
  children: ReactNode;
  title: string;
  onClose?: () => void;
}

interface Input extends BaseModal {
  placeholder: string;
}

interface Delete extends BaseModal {
  text: string;
}

interface Share extends Omit<BaseModal, "children"> {
  folderName: string;
}

interface List extends BaseModal {
  folderList: FolderList[];
}

export const Modal = ({ children, title, onClose }: BaseModal) => {
  return ReactDom.createPortal(
    <S.Background onClick={onClose}>
      <S.Container
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <S.Title>{title}</S.Title>
        {children}
      </S.Container>
    </S.Background>,
    document.getElementById("modal") as HTMLElement
  );
};

export const InputModal = ({
  children,
  title,
  placeholder,
  onClose,
}: Input) => {
  return (
    <Modal title={title}>
      <>
        <S.Input placeholder={placeholder} />
        <AddModalButton>{children}</AddModalButton>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      </>
    </Modal>
  );
};

export const DeleteModal = ({ children, title, text, onClose }: Delete) => {
  return (
    <Modal title={title}>
      <>
        <S.Text>{text}</S.Text>
        <DeleteModalButton>{children}</DeleteModalButton>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      </>
    </Modal>
  );
};

export const ShareModal = ({ title, folderName, onClose }: Share) => {
  return (
    <Modal title={title}>
      <>
        <S.Text>{folderName}</S.Text>
        <S.IconBox>
          {MODAL_ICON_LIST &&
            MODAL_ICON_LIST.map((icon) => (
              <Icon
                key={icon.alt}
                size={"large"}
                url={icon.url}
                image={icon.image}
                alt={icon.alt}
              />
            ))}
        </S.IconBox>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      </>
    </Modal>
  );
};

export const ListModal = ({ children, title, folderList, onClose }: List) => {
  return (
    <Modal title={title}>
      <>
        <S.Text>링크주소</S.Text>
        {folderList &&
          folderList.map((folder) => (
            <S.List key={folder.id}>
              {folder.name}
              {folder.link?.count}
            </S.List>
          ))}
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
        <AddModalButton>{children}</AddModalButton>
      </>
    </Modal>
  );
};
