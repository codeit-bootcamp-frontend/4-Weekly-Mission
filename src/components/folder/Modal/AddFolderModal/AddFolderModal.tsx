import { useContext, useState } from 'react';
import { FolderContext } from '@/src/context/folderContext';
import {
  ButtonWrapper,
  LinkName,
  FolderName,
  Wrapper,
  CheckIcon,
} from './AddFolderModal.style';

const AddFolderModal = () => {
  const { modalData } = useContext(FolderContext);
  const [checkID, setCheckID] = useState<number | null | undefined>(
    modalData?.currentFolderID,
  );
  const folder = modalData?.folder;
  const clickButton = (value: number) => {
    setCheckID(value);
  };
  return (
    <Wrapper>
      {folder &&
        folder?.map((fold) => (
          <ButtonWrapper
            key={fold.folderID}
            onClick={() => clickButton(fold.folderID)}
            $checked={checkID === fold.folderID}
          >
            <FolderName $checked={checkID === fold.folderID}>
              {fold.folderName}
            </FolderName>
            <LinkName>{fold.linkCount}개 링크</LinkName>
            {checkID === fold.folderID && (
              <CheckIcon
                src="/images/check.svg"
                alt="check"
                width={14}
                height={14}
              />
            )}
          </ButtonWrapper>
        ))}
    </Wrapper>
  );
};

export default AddFolderModal;
