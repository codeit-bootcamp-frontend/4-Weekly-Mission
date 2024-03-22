import { useContext, useState } from 'react';
import { FolderContext } from '@/src/context/folderContext';
import * as S from './AddFolderModal.style';

const AddFolderModal = () => {
  const { modalData } = useContext(FolderContext);
  const [checkID, setCheckID] = useState<number | null>(
    modalData?.currentFolderID ? modalData?.currentFolderID : null,
  );
  const folder = modalData?.folder;
  const clickButton = (value: number) => {
    setCheckID(value);
  };
  return (
    <S.Wrapper>
      {folder &&
        folder?.map((fold) => (
          <S.ButtonWrapper
            key={fold.folderID}
            onClick={() => clickButton(fold.folderID)}
            $checked={checkID === fold.folderID}
          >
            <S.FolderName $checked={checkID === fold.folderID}>
              {fold.folderName}
            </S.FolderName>
            <S.LinkName>{fold.linkCount}개 링크</S.LinkName>
            {checkID === fold.folderID && (
              <S.CheckIcon
                src="/images/check.svg"
                alt="check"
                width={14}
                height={14}
              />
            )}
          </S.ButtonWrapper>
        ))}
    </S.Wrapper>
  );
};

export default AddFolderModal;
