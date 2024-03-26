import styles from "./Modal.module.css";
import AddToMyFolder from "./AddToMyfolder";
import ChangeFolderName from "./ChangeFolderName";
import DeleteLink from "./DeleteLink";
import ShareFolder from "./ShareFolder";
import DeleteFolder from "./DeleteFolder";
import AddFolder from "./AddFolder";

interface ModalProps {
  categoryData: any;
  modal?: string | null;
  selectedId: number;
  currentCategory: string;
  setIsModalOpen: (isOpen: boolean) => void;
  currentUrl: string;
}

const Modal: React.FC<ModalProps> = ({
  categoryData,
  modal,
  selectedId,
  currentCategory,
  setIsModalOpen,
  currentUrl,
}) => {
  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  const renderModalContent = () => {
    switch (modal) {
      case "changeFolderName":
        return <ChangeFolderName currentCategory={currentCategory} />;
      case "shareFolder":
        return (
          <ShareFolder
            currentCategory={currentCategory}
            selectedId={selectedId}
          />
        );
      case "deleteFolder":
        return <DeleteFolder currentCategory={currentCategory} />;
      case "addFolder":
        return <AddFolder />;
      case "deleteLink":
        return <DeleteLink currentUrl={currentUrl} />;
      case "addToFolder":
        return (
          <AddToMyFolder categoryData={categoryData} currentUrl={currentUrl} />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.ModalWrapper} onClick={handleCloseClick}>
      <div className={styles.Modal} onClick={(e) => e.stopPropagation()}>
        {renderModalContent()}
        <button className={styles.closeButton} onClick={handleCloseClick}>
          <img src="images/close_button.svg" alt="닫힘 버튼" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
