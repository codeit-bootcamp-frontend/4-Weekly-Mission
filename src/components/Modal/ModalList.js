import * as S from './Modalstyled';
import checkIcon from '../../assets/check.png';

const ModalList = ({ folders }) => {
  return folders.map((folder) => (
    <S.ModalListContainer key={folder.folderName}>
      <S.ModalListContent>
        <S.ModalListName>{folder.folderName}</S.ModalListName>
        <S.ModalListNumber>{folder.folderCount}</S.ModalListNumber>
      </S.ModalListContent>
      {folder.hasCheck && <S.ModalListCheck src={checkIcon} />}
    </S.ModalListContainer>
  ));
};

export default ModalList;
