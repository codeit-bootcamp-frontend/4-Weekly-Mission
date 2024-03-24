import React, { useState } from 'react';
import Header from '../components/Header/Header';
import FolderContent from '../components/Folder/FolderContent';
import Footer from '../components/Footer/Footer';
import FloatingButton from '../components/Folder/FloatingButton';
import Modal from '../components/Modal/Modal';
import { CategoryType, DefaultCategoryType, ModalActionType } from '../types/type';

let prevId: number = 999;

const INITIAL_CATEGORY: DefaultCategoryType[] = [
  {
    id: 0,
    name: '전체',
    link: { count: 0 }
  }
];
function Folder() {
  const [selectCardId, setSelectCardId] = useState<number>(0);
  const [categoryList, setCategoryList] = useState<CategoryType[]>(INITIAL_CATEGORY); // 유저가 가지고 있는 카테고리
  const [modalAction, setModalAction] = useState<ModalActionType>({
    isView: false,
    action: '',
    subTitle: '',
    url: ''
  });

  const handleKebabClick = (id: number): void => {
    if (prevId !== id) {
      setSelectCardId(id);
      prevId = id;
      return;
    }
    setSelectCardId(0);
    prevId = 999;
  };

  const handleModalAction = (action: string, subTitle?: string, url?: string): void => {
    setModalAction({
      isView: true,
      action,
      subTitle,
      url
    });
  };

  const folderContentProps: {
    handleKebabClick: (id: number) => void;
    selectCardId: number;
    categoryList: CategoryType[];
    setCategoryList: React.Dispatch<React.SetStateAction<CategoryType[]>>;
    handleModalAction: (action: string, subTitle?: string, url?: string) => void;
  } = {
    handleKebabClick,
    selectCardId,
    categoryList,
    setCategoryList,
    handleModalAction
  };
  return (
    <>
      <Header isSticky={false} />
      <FolderContent {...folderContentProps} />
      <Footer />
      <FloatingButton />
      {modalAction.isView && (
        <Modal modalAction={modalAction} setModalAction={setModalAction} categoryList={categoryList} />
      )}
    </>
  );
}

export default Folder;
