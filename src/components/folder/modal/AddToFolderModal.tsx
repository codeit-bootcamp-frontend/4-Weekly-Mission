import { useState } from 'react';
import { styled } from 'styled-components';

import BackdropModal from 'components/common/modal/BackdropModal';
import Button from 'components/common/button/Button';
import AddFolderList from 'components/folder/AddFolderList';

const Styled = {
  Title: styled.span`
    font-size: 2rem;
    font-weight: 700;
  `,

  Item: styled.div`
    width: 100%;
    margin: 1rem 0 2.4rem;

    font-size: 1.4rem;
    line-height: 2.2rem;
    text-align: center;
    color: ${({ theme }) => theme.color.gray4};
  `,
};

/**
 * AddToFolderModal - 폴더에 링크 추가 작업을 처리하는 모달 컴포넌트
 * @param {function} setOpen 모달창 열림 상태 변경하는 set 함수
 * @param  {function} onModalClose 링크를 폴더에 추가 후, 모달이 닫힐 때 호출되는 콜백 함수
 * @param {string} item 폴더에 추가할 링크 주소
 */

interface FolderInfo {
  name: string;
}

interface AddToFolderModalProps {
  setOpen: (open: boolean) => void;
  onModalClose: () => void;
  item: string;
}

function AddToFolderModal({ setOpen, onModalClose, item }: AddToFolderModalProps) {
  const [selectedFolder, setSelectedFolder] = useState<FolderInfo | null>(null);

  const handleSelectFolder = (folderInfo: FolderInfo) => {
    setSelectedFolder(folderInfo); // 받은 폴더 정보로 상태 업데이트
  };

  const handleButtonClick = () => {
    if (!selectedFolder || !selectedFolder.name) {
      window.alert('폴더를 선택해주세요‼️');
      return;
    }

    alert(`성공적으로 ${item}을 ${selectedFolder.name} 폴더에 추가했습니다🥳`);
    setOpen(false);
    setSelectedFolder(null);
    onModalClose();
  };

  return (
    <BackdropModal setOpen={setOpen}>
      <Styled.Title>폴더에 추가</Styled.Title>
      <Styled.Item>{item}</Styled.Item>
      <AddFolderList onSelectFolder={handleSelectFolder} />
      <Button onClick={handleButtonClick} style={{ width: '100%', height: '5.1rem', marginTop: '2.4rem' }}>
        추가하기
      </Button>
    </BackdropModal>
  );
}

export default AddToFolderModal;
