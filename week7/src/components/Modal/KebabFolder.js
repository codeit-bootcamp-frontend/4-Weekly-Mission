import "./KebabFolder.css";

const KebabFolder = ({ isShowModal, dataUrl }) => {
  const isDeleteModal = (e) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: true,
      dataUrl: dataUrl,
    }));
    console.log();
  };

  const isFolderAddModal = (e) => {
    e.preventDefault();
    isShowModal((prev) => ({
      linkModal: true,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: false,
    }));
  };

  return (
    <div className="kebab-menu-container">
      <div onClick={isDeleteModal}>삭제하기</div>
      <div onClick={isFolderAddModal}>폴더에 추가</div>
    </div>
  );
};

export default KebabFolder;
