import { useState } from 'react';
import theme from 'styles/theme';

import BUTTON_TYPE from 'constants/BUTTON_TYPE';
import PLACEHOLDER from 'constants/FORM_MESSAGE';
import Button from 'components/common/button/Button';
import TabButton from 'components/common/button/TabButton';
import IconButton from 'components/common/button/IconButton';
import IconLabelButton from 'components/common/button/IconLabelButton';
import AddLinkBar from 'components/AddLinkBar';
import BackdropModal from 'components/common/modal/BackdropModal';
import InputFormModal from 'components/folder/modal/InputFormModal';
import DeleteItemModal from 'components/folder/modal/DeleteItemModal';
import FolderShareModal from 'components/folder/modal/FolderShareModal';
import AddFolderList from 'components/folder/AddFolderList';
import AddToFolderModal from 'components/folder/modal/AddToFolderModal';

import youtubeIcon from 'assets/icon/youtube-icon.svg';
import closeIcon from 'assets/icon/close-icon.svg';
import shareIcon from 'assets/icon/share-icon.svg';
import strokeIcon from 'assets/icon/stroke-icon.svg';
import deleteIcon from 'assets/icon/delete-icon.svg';

const tabInfo = [
  {
    title: '전체',
    func: () => {
      console.log('전체');
    },
  },
  {
    title: '⭐️ 즐겨찾기',
    func: () => {
      console.log('즐찾');
    },
  },
  {
    title: '코딩 팁',
    func: () => {
      console.log('코딩 팁');
    },
  },
  {
    title: '채용 사이트',
    func: () => {
      console.log('채용 사이트');
    },
  },
  {
    title: '유용한 글',
    func: () => {
      console.log('유용한 글');
    },
  },
];

function Test() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFolderNameChange = (inputValue) => {
    console.log('폴더이름 변경:', inputValue);
  };

  const handleClickDelete = () => {
    console.log('삭제');
  };

  return (
    <>
      <Button>로그인</Button>
      <Button styleType={BUTTON_TYPE.DELETE}>삭제하기</Button>
      <TabButton tabInfo={tabInfo} />
      <IconButton icon={youtubeIcon} />
      <IconButton icon={closeIcon} style={{ width: '2.4rem', height: '2.4rem', backgroundColor: '#E7EFFB' }} />
      <IconLabelButton icon={shareIcon} label="공유" />
      <IconLabelButton icon={strokeIcon} label="이름 변경" />
      <IconLabelButton icon={deleteIcon} label="삭제" />
      <AddLinkBar placeholder={PLACEHOLDER.ADD_LINK} />

      {/* <button
        style={{
          padding: '2rem',
          borderRadius: '1.5rem',
          color: 'white',
          backgroundColor: `${theme.color.primary}`,
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        폴더 이름 변경
      </button>
      {isModalOpen && (
        <InputFormModal
          setOpen={setIsModalOpen}
          onSubmit={handleFolderNameChange}
          modalTitle="폴더 이름 변경"
          buttonLabel="변경하기"
        />
      )} */}

      {/* <button
        style={{
          padding: '2rem',
          borderRadius: '1.5rem',
          color: 'white',
          backgroundColor: `${theme.color.red}`,
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        폴더 삭제
      </button>
      {isModalOpen && (
        <DeleteItemModal
          setOpen={setIsModalOpen}
          onClick={handleClickDelete}
          modalTitle="폴더 삭제"
          item="저는이런 폴더에요"
        />
      )} */}

      <button
        style={{
          padding: '2rem',
          borderRadius: '1.5rem',
          color: 'white',
          backgroundColor: `${theme.color.gray4}`,
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        폴더 공유
      </button>
      {isModalOpen && <FolderShareModal setOpen={setIsModalOpen} item="저는이런 폴더에요ㅇㄹㄴㅇ" />}
      {/* <button
        style={{
          padding: '2rem',
          borderRadius: '1.5rem',
          color: 'white',
          backgroundColor: `${theme.color.gray4}`,
        }}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        폴더 공유
      </button>
      {isModalOpen && <AddToFolderModal setOpen={setIsModalOpen} item="공유할 링크주소는이거라네" />} */}
    </>
  );
}

export default Test;
