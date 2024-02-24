import styles from "./Modal.module.css";
import AddToMyFolder from "./AddToMyfolder";
import ChangeFolderName from "./ChangeFolderName";
import DeleteLink from "./DeleteLink";
import ShareFolder from "./ShareFolder";
import DeleteFolder from "./DeleteFolder";
import AddFolder from "./AddFolder";

function Modal({
  categoryData,
  modal,
  selectedLink,
  selectedId,
  currentCategory,
  setIsModalOpen,
}) {
  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles["Modal-wrapper"]}>
      <div className={styles["Modal"]}>
        {
          {
            //prettier-ignore
            changeFolderName: <ChangeFolderName currentCategory={currentCategory} />,
            //prettier-ignore
            shareFolder: <ShareFolder currentCategory={currentCategory} selectedId={selectedId}/>,
            deleteFolder: <DeleteFolder currentCategory={currentCategory} />,
            addFolder: <AddFolder />,
            deleteLink: <DeleteLink selectedLink={selectedLink} />,
            //prettier-ignore
            addToFolder:<AddToMyFolder selectedLink={selectedLink} categoryData={categoryData} />,
          }[modal]
        }
        <button className={styles["closeButton"]} onClick={handleCloseClick}>
          <img src="images/close_button.svg" alt="닫힘 버튼" />
        </button>
      </div>
    </div>
  );
}

export default Modal;
