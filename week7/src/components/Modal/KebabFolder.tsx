import "./KebabFolder.css";

interface KebabFolderProps {
  isShowModal: (modalState: {
    linkModal: boolean;
    folderAddModal: boolean;
    shareAddModal: boolean;
    editAddModal: boolean;
    deleteAddModal: boolean;
    linkDeleteModal: boolean;
    dataUrl?: string;
  }) => void;
  dataUrl: string;
}
const KebabFolder = ({ isShowModal, dataUrl }: KebabFolderProps) => {
  const isDeleteModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isShowModal({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: true,
      dataUrl: dataUrl,
    });
  };

  const isFolderAddModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isShowModal({
      linkModal: true,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: false,
    });
  };

  return (
    <div className="kebab-menu-container">
      <div onClick={isDeleteModal}>삭제하기</div>
      <div onClick={isFolderAddModal}>폴더에 추가</div>
    </div>
  );
};

export default KebabFolder;
