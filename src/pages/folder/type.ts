export interface ModalItem {
  name: string;
  buttonColor: string;
  buttonName: string;
}

export interface ModalNames {
  add: ModalItem;
  folderAdd: ModalItem;
  share: ModalItem;
  change: ModalItem;
  delete: ModalItem;
  linkDelete: ModalItem;
}

export interface ModalProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setButtonColor: React.Dispatch<React.SetStateAction<string>>;
  setButtonName: React.Dispatch<React.SetStateAction<string>>;
  modalName: ModalNames;
}
