export interface LinkCardFunctionObjectType {
  buttonName: string;
  type: string;
  data: any;
  modalHandle: (modalType: string, modalData: any) => void;
  modalButtonAction: () => void;
}

export interface LinkFolderFunctionObjectType
  extends LinkCardFunctionObjectType {
  imgUrl: string;
  imgAlt: string;
}

// ModalFunction
export interface ModalDataAddLinkToSubFolder {
  handleSubmit: (
    type: string,
    modalData: [string, FolderListDataType[]]
  ) => void;
  subFolderList: FolderListDataType[];
}

export interface ModalDataRemoveLink {
  modalData: string;
}

export interface ModalDataRemoveSubFolder {
  modalData: string;
}

export interface ModalDataShareSubFolder {
  modalData: [string, string];
}
