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

export interface Props {
  id: number | string;
  title?: string;
  image_source?: string;
  created_at: string;
  url: string;
  updated_at?: string;
  description?: string;
}
export interface Contents {
  data: Props[];
}
