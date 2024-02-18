import ModalCheckIcon from '../../assets/modal-check.svg';
import { useState } from 'react';
import * as Styled from './Modal.styled';

function ModalCategoryList({ categoryListLoop }) {
  const [selectCategory, setSelectCategory] = useState(null);

  const handleSelectCategory = (e) => {
    setSelectCategory(e.target.id);
  };

  return (
    <Styled.ModalCategory>
      {categoryListLoop.map((category) => {
        const { id, name, link } = category;
        const isSelect = +selectCategory === id;
        return (
          <Styled.ModalCategoryList onClick={handleSelectCategory} key={id} id={id} $isSelect={isSelect}>
            {name}
            <Styled.ModalCategoryCount id={id}>{`${link.count}개 링크`}</Styled.ModalCategoryCount>
            {isSelect && <Styled.ModalCategorySelectImg src={ModalCheckIcon} alt='체크 아이콘' />}
          </Styled.ModalCategoryList>
        );
      })}
    </Styled.ModalCategory>
  );
}

export default ModalCategoryList;
