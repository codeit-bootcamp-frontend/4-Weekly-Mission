import styled from 'styled-components';
import {
  ADD_TYPE,
  DELETE_TYPE,
  LINK_DELETE,
} from '../../../constants/modalConstants';
import { useContext } from 'react';
import { ModalContext } from '../FolderPage';
import { PopOverProps } from '../../../types/interfaces/props';
import { ClickFunctionType } from '../../../types/functionsType';

function PopOver({ id, url }: PopOverProps) {
  const { handleModalOpen } = useContext(ModalContext)!;
  const handleLinkDeleteModalOpen: ClickFunctionType = (e) => {
    e.preventDefault();
    const purpose = {
      id: id,
      purpose: LINK_DELETE,
      name: url,
    };
    handleModalOpen(DELETE_TYPE, purpose);
  };

  const handleLinkAddModalOpen: ClickFunctionType = (e) => {
    e.preventDefault();
    handleModalOpen(ADD_TYPE, url);
  };

  return (
    <PopOverContainer>
      <Button onClick={handleLinkDeleteModalOpen}>삭제하기</Button>
      <Button onClick={handleLinkAddModalOpen}>폴더에 추가</Button>
    </PopOverContainer>
  );
}

const PopOverContainer = styled.div`
  width: 100px;
  height: 64px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  background-color: white;
  z-index: 10;
  position: absolute;
  top: 20px;
  left: 271px;
`;
const Button = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: var(--gray-light-gray-100, #333236);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background-color: transparent;
  &:hover {
    color: var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-gray10, #e7effb);
  }
`;
export default PopOver;
