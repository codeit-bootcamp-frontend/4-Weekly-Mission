import React from 'react';
import ModalCategoryList from './ModalCategoryList';
import * as Styled from './Modal.styled';

interface LinkType {
  count: number;
}

interface CategoryType {
  created_at?: string;
  favorite?: boolean;
  id: number;
  link: LinkType;
  name: string;
  user_id?: number;
}

interface ModalFolderAddType {
  categoryListLoop: CategoryType[];
}

function ModalFolderAdd({ categoryListLoop }: ModalFolderAddType) {
  return (
    <>
      <ModalCategoryList categoryListLoop={categoryListLoop} />
      <Styled.ModalButtonBlue>추가하기</Styled.ModalButtonBlue>
    </>
  );
}

export default ModalFolderAdd;
