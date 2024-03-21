export interface LinkCardFunctionObjectType {
  buttonName: string;
  type: string;
  data?: any;
  modalHandle: (modalType: string, modalData: any) => void;
  modalButtonAction: () => void;
}

export interface LinkFolderFunctionObjectType
  extends LinkCardFunctionObjectType {
  imgUrl: string;
  imgAlt: string;
}

// ModalFunction
export interface ModalFunctionAddLinkToSubFolder {
  handleSubmit: (
    type: string,
    modalData: [string, FolderListDataType[]]
  ) => void;
  subFolderList: FolderListDataType[];
}
