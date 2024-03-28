import { createContext, useCallback, useMemo, useState } from 'react';
import { modalDataType } from '../type';

interface contextType {
  kebabID: number | null;
  changeKebabID: (value: number | null) => void;
  modalData: modalDataType | null;
  changeModalData: (value: modalDataType) => void;
}

const defaultValue = {
  kebabID: null,
  changeKebabID: () => {},
  modalData: null,
  changeModalData: () => {},
};

interface Props {
  children: React.ReactNode;
}

export const FolderContext = createContext<contextType>(defaultValue);

export const FolderContextProvider = ({ children }: Props) => {
  const [kebabID, setKebabID] = useState<number | null>(null);
  const [modalData, setModalData] = useState<modalDataType>({
    modalType: null,
    subTitle: null,
    folder: null,
    currentFolderID: null,
    currentLinkID: null,
  });
  const changeKebabID = useCallback((value: number | null) => {
    setKebabID(value);
  }, []);
  const changeModalData = useCallback((value: modalDataType) => {
    setModalData(value);
  }, []);

  const value = useMemo(
    () => ({ kebabID, changeKebabID, modalData, changeModalData }),
    [kebabID, changeKebabID, modalData, changeModalData],
  );
  return (
    <FolderContext.Provider value={value}>{children}</FolderContext.Provider>
  );
};
