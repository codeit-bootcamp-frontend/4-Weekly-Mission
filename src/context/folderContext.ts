import { createContext } from 'react';
import { modalDataType } from '../type';

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
