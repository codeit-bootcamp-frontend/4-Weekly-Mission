export interface folderDataType {
  created_at: string;
  favorite: boolean;
  id: number;
  link: { [key: string]: number };
  name: string;
  user_id: number;
}

export interface InputSectionProps {
  folderData: folderDataType[];
}

export interface linksType extends folderDataType {
  description: string;
  image_source: string;
  title: string;
  updated_at: null;
  url: string;
}

export interface folderToolBarProps {
  folderData: folderDataType[];
  filteredItems?: linksType[];
  selectedButtonName?: string;
  onFolderSelect?: (folderId: string | number, folderName?: string) => void;
}

export interface folderCardListProps extends folderToolBarProps {
  isModalOpen?: boolean;
  modalType?: string;
  openModal: (
    open: boolean,
    title: string,
    buttonName: string | undefined,
    type: string | undefined
  ) => void;
  closeModal: () => void;
  changeModalType: (type: string | undefined) => void;
  modalTitle?: string;
  modalButtonName?: string;
}

export interface modalType {
  linkId?: number | null;
  folderData?: folderDataType[];
  closeModal: () => void;
  modalTitle?: string;
  modalButtonName?: string;
}

export interface handleModalType {
  title: string;
  buttonName?: string;
  modalType: string;
}

export interface searchBarProps {
  onSearch: (searchTerm: string) => void;
}
