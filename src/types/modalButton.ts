export interface ModalButton {
  isOpen: boolean;
  title: string;
  buttonText: string;
  onClick: () => void;
  onCloseClick: () => void;
  onKeyDown: () => void;
}
