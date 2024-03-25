import React, { MouseEvent, useState } from 'react';
import ModalCheckIcon from '../../assets/modal-check.svg';
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

interface ModalCategoryListType {
  categoryListLoop: CategoryType[];
}

function ModalCategoryList({ categoryListLoop }: ModalCategoryListType) {
  const [selectCategory, setSelectCategory] = useState<number>(0);

  const handleSelectCategory = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    if (target.dataset.id) {
      setSelectCategory(+target.dataset.id);
    }
  };

  return (
    <Styled.ModalCategory>
      {categoryListLoop.map((category) => {
        const { id, name, link } = category;
        const isSelect = +selectCategory === id;
        return (
          <Styled.ModalCategoryList onClick={handleSelectCategory} key={id} data-id={id} $isSelect={isSelect}>
            {name}
            <Styled.ModalCategoryCount data-id={id}>{`${link.count}개 링크`}</Styled.ModalCategoryCount>
            {isSelect && <Styled.ModalCategorySelectImg src={ModalCheckIcon} alt="체크 아이콘" />}
          </Styled.ModalCategoryList>
        );
      })}
    </Styled.ModalCategory>
  );
}

export default ModalCategoryList;
