export interface ModalProps extends OnModalProps {
  children: ReactNode;
}

export interface OnModalProps {
  onModal: onModal;
}
export interface ModalShareProps {
  userId: number;
  folderId: number;
  folderName: string;
}

export interface ShareButtonProps {
  src: string;
  text: string;
  alt: string;
  shareUrl: string;
}

export interface ShareImgDivProps {
  src: string;
  alt: string;
  text: string;
  handleClick?: () => void;
}

export type onModal = (type?: string, link?: string) => void;
