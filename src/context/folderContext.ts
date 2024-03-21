import { createContext } from 'react';

interface folderDataType {
  folderName: string;
  folderID: number;
  linkCount: number;
}

interface modalDataType {
  modalType: string | null;
  subTitle: string | null;
  folder: folderDataType[] | undefined;
  currentFolderID: number | null;
  currentLinkID: number | null;
}

interface contextType {
  kebabID: number | null;
  changeKebabID: (value: number | null) => void;
  modalData: modalDataType | null;
  changeModalData: (value: modalDataType) => void;
}

const folderContext = createContext<contextType>({
  kebabID: null,
  changeKebabID: () => {},
  modalData: null,
  changeModalData: () => {},
});

export default folderContext;
