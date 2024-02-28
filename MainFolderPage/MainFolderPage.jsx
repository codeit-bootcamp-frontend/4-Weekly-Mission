import { useState } from "react";
import AddFolderModal from "../../components/Modal/AddFolderModal";
import EditFolderModal from "../../components/Modal/EditFolderModal";

const MainFolderPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  return (
    <>
      <button style={{
        fontSize: "20px",
        borderColor: "black",
      }} onClick={openAddModal}>+폴더 추가</button>
      <button style={{
        fontSize: "20px",
        borderColor: "black",
      }} onClick={openEditModal}>*이름 변경</button>
      <AddFolderModal isOpen={isAddModalOpen} closeModal={closeAddModal} />
      <EditFolderModal isOpen={isEditModalOpen} closeModal={closeEditModal} />
    </>
  );
};

export default MainFolderPage;
