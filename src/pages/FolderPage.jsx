import Header from '../components/header/Header';
import FolderContent from '../components/folder/FolderContent';
import Footer from '../components/footer/Footer';
import FloatingButton from '../components/folder/FloatingButton';
import Modal from '../components/modal/Modal';
import '../styles/folder.css';
import { useState } from 'react';

let prevId = 999;
const DEFAULT_CATEGORY = [
  {
    id: 0,
    name: '전체',
  },
];
function Folder() {
  const [selectCardId, setSelectCardId] = useState(0);
  const [categoryList, setCategoryList] = useState(DEFAULT_CATEGORY); // 유저가 가지고 있는 카테고리
  const [modalAction, setModalAction] = useState({
    isView: false,
    action: '',
    subTitle: '',
  });

  const handleKebabClick = (id) => {
    if (prevId !== id) {
      setSelectCardId(id);
      prevId = id;
      return;
    }
    setSelectCardId(0);
    prevId = 999;
  };

  const handleModalAction = (action, subTitle) => {
    setModalAction({
      isView: true,
      action,
      subTitle,
    });
  };

  const folderContentProps = {
    handleKebabClick,
    selectCardId,
    categoryList,
    setCategoryList,
    handleModalAction,
  };
  return (
    <>
      <Header />
      <FolderContent {...folderContentProps} />
      <Footer />
      <FloatingButton />
      <Modal modalAction={modalAction} setModalAction={setModalAction} categoryList={categoryList} />
    </>
  );
}

export default Folder;
