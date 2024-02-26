import styled from "styled-components";
import { TargetName } from "./ModalDelete";
import { CloseBtn, EditBtn, ModalTitle } from "./ModalFolderEdit";
import checkIcon from "../img/check.png";

const Modal = styled.div`
  width: 36rem;
  padding: 3.2rem 4rem;
  background-color: #fff;
  border-radius: 15px;
  display: ${({ type }) => (type === "AddAtFolder" ? "flex" : "none")};
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

const FolderList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 15rem;
  overflow-y: scroll;
`;

const Folder = styled.li`
  cursor: pointer;
  padding: 0.8rem;
  font-size: 1.6rem;
  border-radius: 8px;
  position: relative;
  &:hover {
    background-color: #f0f6ff;
  }
`;

const LinkCount = styled.span`
  color: #9fa6b2;
  font-size: 1.4rem;
  margin-left: 8px;
`;

const CheckIcon = styled.img`
  visibility: visible;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

function ModalLinkAdd({ type, dispatch, folderList }) {
  return (
    <Modal type={type.type}>
      <CloseBtn
        onClick={() => {
          dispatch({ state: false });
        }}
      />
      <div>
        <ModalTitle>폴더에 추가</ModalTitle>
        <TargetName>{type.url}</TargetName>
      </div>
      <FolderList>
        {folderList
          ? folderList.map((folder) => (
              <Folder>
                {folder.name}
                <LinkCount>{folder.link.count}개 링크</LinkCount>
                <CheckIcon src={checkIcon} />
              </Folder>
            ))
          : null}
      </FolderList>
      <EditBtn linear>추가하기</EditBtn>
    </Modal>
  );
}

export default ModalLinkAdd;
