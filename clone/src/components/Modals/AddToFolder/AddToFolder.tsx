import { ModalButtonBlue } from "components/Modals/ModalElements/ModalButtonBlue";
import "./AddToFolder.css";
import { Modal } from "components/Modals/Modal/Modal";
import styled from "styled-components";

export function AddToFolder({
  isOpenModal,
  handleModalClose,
  linkURL,
  data,
  inputValue,
}) {
  return (
    <Modal
      title="폴더에 추가"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <SelectLink>{linkURL}</SelectLink>
      <FolderListContainer>
        {data?.map((folder) => (
          <SelectFolder>
            <FolderName>{folder.name}</FolderName>
            <FolderCount>{folder.link.count}개 링크</FolderCount>
            <SelectFolderIcon />
          </SelectFolder>
        ))}
      </FolderListContainer>
      <ModalButtonBlue type="button">삭제하기</ModalButtonBlue>
    </Modal>
  );
}

const FolderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-height: 20rem;
  overflow: hidden scroll;
`;

const SelectFolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem;
  gap: 0.8rem;

  &:hover {
    background-color: var(--light-blue);
  }
`;

export const SelectLink = styled.p`
  color: var(--gray60);
  font-size: 1.4rem;
  line-height: 2.2rem;
  text-align: center;
`;

const FolderName = styled.p`
  color: var(--gray100);
  line-height: 2.4rem;
  font-size: 1.6rem;
`;

const FolderCount = styled.span`
  font-size: 1.4rem;
  line-height: 1.671rem;
  color: var(--gray60);
`;

const SelectFolderIcon = styled.div`
  display: none;
  width: 1.125rem;
  height: 0.95rem;
  background-image: url("../../../../public/images/check.svg");
  position: absolute;
  right: 5.5rem;
`;
