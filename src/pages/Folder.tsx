import Footer from "../components/sharing/Footer";
import AddLinkForm from "../components/folder/input/AddLinkForm";
import SearchInputForm from "../components/folder/input/SearchInputForm";
import TagList from "../components/folder/tag/TagList";
import Actions from "../components/folder/Actions";
import CardList from "../components/folder/card/CardList";
import FolderHeaderLayout from "../components/folder/layout/FolderHeaderLayout";
import MainLayout from "../components/folder/layout/MainLayout";
import ModalContainer from "../components/sharing/modal/Modal";
import * as Modal from "../components/sharing/modal/ModalContents";
import ModalButton from "../components/sharing/modal/ModalButton";
import useModal from "../hooks/useModal";
import { useFolder } from "../contexts/FolderContext";
import { useEffect, useState } from "react";
import { getUser } from "../utils/api";
import Header from "../components/sharing/Header";
import Button from "../components/sharing/Button";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const AddFolderButton = styled(Button)`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: var(--color-primary);

  white-space: nowrap;
  cursor: pointer;
  background: none;
  @media (min-width: 375px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 24px 8px 24px;

    position: fixed;
    bottom: 5%;
    left: 30%;
    right: 30%;
    z-index: 1;

    border-radius: 20px;
    background-color: var(--color-primary);
    color: white;
  }
`;

const Folder = () => {
  const [user, setUser] = useState({ email: null, profileImageSource: null });
  const { openModal, handleModalOpen, handleModalClose } = useModal();
  const { currentFolder } = useFolder();
  const [searchParam, setSearchParam] = useSearchParams();

  const loadUser = async () => {
    const { email, profileImageSource } = await getUser();
    if (!email) return;
    setUser({ email: email, profileImageSource: profileImageSource });
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Header userInfo={user} fixed={false} />
      <FolderHeaderLayout>
        <AddLinkForm />
      </FolderHeaderLayout>
      <MainLayout>
        <SearchInputForm />

        {searchParam.get("keyword") && (
          <h1 style={{ margin: 0 }}>
            {searchParam.get("keyword")}
            <span className="font-color-gray4">으로 검색한 결과입니다.</span>
          </h1>
        )}

        <div className="space-between">
          <TagList />
          <AddFolderButton variant="text" onClick={handleModalOpen}>
            폴더 추가 +
          </AddFolderButton>
        </div>
        <div className="space-between">
          <span className="font-24px font-regular">{currentFolder.name}</span>
          {currentFolder.id !== 1 && <Actions />}
        </div>

        <CardList />
      </MainLayout>
      <Footer />

      {openModal && (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>폴더 추가</Modal.Title>
          <Modal.Input placeholder="내용 입력" />
          <ModalButton buttonStyle="blue">추가하기</ModalButton>
        </ModalContainer>
      )}
    </>
  );
};

export default Folder;
