import React from 'react';
import {
  FolderDataWrapper,
  LinkForm,
  LinkAddInput,
  LinkAddButton,
  Icon,
} from '../../styles/styledComponents/folderStyled';
import linkImage from '../../assets/Images/link.png';

export const FolderHeader = () => {
  return (
    <>
      <FolderDataWrapper>
        <LinkForm>
          <Icon src={linkImage} alt="link" width="20" height="20"></Icon>
          <LinkAddInput
            type="text"
            className="link-add-box"
            placeholder="링크를 추가해 보세요"
          ></LinkAddInput>
          <LinkAddButton>추가하기</LinkAddButton>
        </LinkForm>
      </FolderDataWrapper>
    </>
  );
};
