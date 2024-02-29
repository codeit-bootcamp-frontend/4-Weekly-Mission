import React, { useContext, useState } from 'react';
import {
  FolderDataWrapper,
  LinkForm,
  LinkAddInput,
  LinkAddButton,
  Icon,
} from '../../styles/styledComponents/folderStyled';
import linkImage from '../../assets/Images/link.png';
import { FolderPageContext } from '../../context/FolderPageContext';
import { cardLinkCount } from '../../assets/utils/cardLinkCount';

export const FolderHeader = () => {
  const { handleModalStatus, handleModalContent, category, folder } =
    useContext(FolderPageContext);
  const [linkData, setLinkData] = useState('');
  const handleLinkData = (e) => {
    setLinkData(`${e.target.value}`);
  };
  const folderName = category ? category.map((element) => element.name) : null;
  const linkCounts = folder && category ? cardLinkCount(category, folder) : [];
  const clickAddButton = (e) => {
    e.preventDefault();
    handleModalStatus();
    handleModalContent({
      ModalContent: 'AddLink',
      currentCardLink: linkData ? `https://${linkData}` : '',
      folderName: ['전체', ...folderName],
      linkCounts: linkCounts,
    });
  };
  return (
    <>
      <FolderDataWrapper>
        <LinkForm>
          <Icon src={linkImage} alt="link" width="20" height="20"></Icon>
          <LinkAddInput
            type="text"
            className="link-add-box"
            placeholder="링크를 추가해 보세요"
            value={linkData}
            onChange={handleLinkData}
          ></LinkAddInput>
          <LinkAddButton onClick={clickAddButton}>추가하기</LinkAddButton>
        </LinkForm>
      </FolderDataWrapper>
    </>
  );
};
