interface LinkCardFunctionObjectType {
  buttonName: string;
  type: string;
  data?: any;
  modalHandle: (modalType: string, modalData: any) => void;
  modalButtonAction: () => void;
}

interface LinkFolderFunctionObjectType extends LinkCardFunctionObjectType {
  imgUrl: string;
  imgAlt: string;
}

export { LinkCardFunctionObjectType, LinkFolderFunctionObjectType };
