import { MouseEvent } from "react";
import { FolderListDataForm } from "../../types/DataForm";

export interface BaseModalProps {
  isOpenModal?: boolean;
  handleModalClose: (e: MouseEvent<HTMLElement>) => void;
}

export interface DeleteLinkProps extends BaseModalProps {
  deleteURL: string;
}

export interface DeleteFolderProps extends BaseModalProps {
  selectFolder: string;
}

export interface ModalProps extends BaseModalProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export interface AddToFolderProps extends BaseModalProps {
  linkURL: string | undefined;
  data: FolderListDataForm[];
}
