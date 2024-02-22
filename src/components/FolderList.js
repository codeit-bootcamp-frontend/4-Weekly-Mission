import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import shareIcon from '../image/share.svg';
import penIcon from '../image/pen.svg';
import deleteIcon from '../image/delete.svg';
import addIcon from '../image/add.svg';
import whiteAddIcon from '../image/addwhite.svg';
import styled from 'styled-components';
import Edit from '../modals/Edit';
import Share from '../modals/Share';
import Delete from '../modals/Delete';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ButtonContianer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  max-width: 80%;
  @media (min-width: 375px) and (max-width: 767px) {
    max-width: 100%;
  }
`;
const Button = styled.button`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: ${(props) => (props.isSelected ? 'var(--Linkbrary-primary-color, #6d6afe)' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    background: var(--Linkbrary-primary-color, #6d6afe);
    color: #fff;
  }
`;
const AddContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: #ffffff;
  @media (min-width: 375px) and (max-width: 767px) {
    position: fixed;
    bottom: 101px;
    padding: 8px 24px;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: flex-start;
    gap: 8px;
    border-radius: 20px;
    border: 1px solid var(--Linkbrary-white, #fff);
    background: var(--Linkbrary-primary-color, #6d6afe);
    z-index: 5;
  }
`;
const AddFolderText = styled.p`
  margin: 0;
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  @media (min-width: 375px) and (max-width: 767px) {
    color: var(--Linkbrary-gray10, #e7effb);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }
`;
const AddFolderImg = styled.img`
  width: 16px;
  height: 16px;
`;

const FolderTypeText = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;
const OptionContainer = styled.div`
  display: ${(props) => (props.isHidden ? 'none' : 'flex')};
  align-items: flex-start;
  gap: 6px;
`;
const OptionImg = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const OptionText = styled.p`
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  cursor: pointer;
`;
function FolderList({ folderListData, onFolderSelect, selectedFolder }) {
  const [currentIcon, setCurrentIcon] = useState(addIcon);
  const [selectedId, setSelectedId] = useState(null);
  const [isEditModalSelected, setEditModalSelected] = useState(false);
  const [isShareModalSelected, setShareModalSelected] = useState(false);
  const [isChangeFolderNameModalSelected, setChangeFolderNameModalSelected] = useState(false);
  const [isDeleteModalSelected, setDeleteModalSelected] = useState(false);
  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 375 && screenWidth <= 767) {
        setCurrentIcon(whiteAddIcon);
      } else {
        setCurrentIcon(addIcon);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleButtonClick = (id) => {
    onFolderSelect(id);
    setSelectedId(id);
  };

  const handleOpenEdit = () => {
    setEditModalSelected(true);
  };
  const handleCloseEdit = () => {
    setEditModalSelected(false);
  };

  const handleOpenShare = () => {
    setShareModalSelected(true);
  };
  const handleCloseShare = () => {
    setShareModalSelected(false);
  };

  const handleOpenFolderNameChange = () => {
    setChangeFolderNameModalSelected(true);
  };
  const handleCloseFolderNameChange = () => {
    setChangeFolderNameModalSelected(false);
  };

  const handleOpenDelete = (id) => {
    setDeleteModalSelected(true);
    setSelectedId(id);
  };
  const handleCloseDelete = () => {
    setDeleteModalSelected(false);
  };
  console.log(selectedFolder.id);
  return (
    <Wrapper>
      <Container>
        <ButtonContianer>
          {folderListData.map((folder) => (
            <Button key={folder.id} onClick={() => handleButtonClick(folder.id)} isSelected={selectedId === folder.id}>
              {folder.name}
            </Button>
          ))}
        </ButtonContianer>
        <AddContainer as="button" onClick={handleOpenEdit}>
          <AddFolderText>폴더 추가</AddFolderText>
          <AddFolderImg src={currentIcon} alt="addIcon" />
        </AddContainer>
        {isEditModalSelected &&
          ReactDOM.createPortal(
            <Edit title="폴더 추가" input="내용 입력" buttonText="추가하기" onClose={handleCloseEdit} />,
            document.getElementById('modal-root')
          )}
      </Container>
      <Container>
        <FolderTypeText>{selectedFolder.name}</FolderTypeText>
        <OptionContainer isHidden={selectedFolder.id === null}>
          <OptionImg src={shareIcon} alt="sharedIcon" onClick={handleOpenShare} />
          <OptionText onClick={handleOpenShare}>공유</OptionText>
          <OptionImg src={penIcon} alt="penIcon" onClick={handleOpenFolderNameChange} />
          <OptionText onClick={handleOpenFolderNameChange}>이름 변경</OptionText>
          <OptionImg src={deleteIcon} alt="deleteIcon" onClick={() => handleOpenDelete(selectedFolder.id)} />
          <OptionText onClick={() => handleOpenDelete(selectedFolder.id)}>삭제</OptionText>
        </OptionContainer>
        {isShareModalSelected &&
          ReactDOM.createPortal(
            <Share
              title="폴더 공유"
              main={selectedFolder.name}
              onClose={handleCloseShare}
              currentFolderId={selectedId}
            />,
            document.getElementById('modal-root')
          )}
        {isChangeFolderNameModalSelected &&
          ReactDOM.createPortal(
            <Edit
              title="폴더 이름 변경"
              input="내용입력"
              buttonText="변경하기"
              onClose={handleCloseFolderNameChange}
            />,
            document.getElementById('modal-root')
          )}
        {isDeleteModalSelected &&
          ReactDOM.createPortal(
            <Delete title="폴더 삭제" main={selectedFolder.name} buttonText="삭제하기" onClose={handleCloseDelete} />,
            document.getElementById('modal-root')
          )}
      </Container>
    </Wrapper>
  );
}

export default FolderList;
