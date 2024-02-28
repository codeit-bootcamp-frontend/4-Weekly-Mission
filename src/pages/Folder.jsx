import Footer from "../components/sharing/Footer";
import AddLinkForm from "../components/folder/ui-input/AddLinkForm";
import SearchInputForm from "../components/folder/ui-input/SearchInputForm";
import TagList from "../components/folder/ui-tag/TagList";
import ActionIconList from "../components/folder/ui-actionIcon/ActionIconList";
import CardList from "../components/folder/ui-card/CardList";
import FolderHeaderLayout from "../components/folder/ui-layout/FolderHeaderLayout";
import MainLayout from "../components/folder/ui-layout/MainLayout";
import AddFolderButton from "../components/folder/ui-button/AddFolderButton";
import ModalContainer, * as Modal from "../components/sharing/ui-modal/Modal";
import useModal from "../hooks/useModal";
import { useFolder } from "../contexts/FolderContext";
import { useEffect, useState } from "react";
import { getUser } from "../utils/api";
import Header from "../components/sharing/Header";

const Folder = () => {
  const [user, setUser] = useState({ email: null, profileImageSource: null });
  const { openModal, handleModalOpen, handleModalClose } = useModal();
  const { currentFolder } = useFolder();

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
        <div className="space-between">
          <TagList />
          <AddFolderButton onClick={handleModalOpen}>
            폴더 추가 +
          </AddFolderButton>
        </div>
        <div className="space-between">
          <span className="font-24px font-regular">{currentFolder.name}</span>
          {currentFolder.id !== 1 && <ActionIconList />}
        </div>
        <CardList />
      </MainLayout>
      <Footer />

      {openModal && (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>폴더 추가</Modal.Title>
          <Modal.Input placeholder="내용 입력" />
          <Modal.BlueButton>추가하기</Modal.BlueButton>
        </ModalContainer>
      )}
    </>
  );
};

export default Folder;
