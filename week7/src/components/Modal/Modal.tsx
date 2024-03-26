import "./Modal.css";
import buttonClose from "../../assets/button-close.svg";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import ModalShare from "./ModalShare";
import ModalLinkAdd from "./ModalLinkAdd";
import ModalFolderAdd from "./ModalFolderAdd";
import { FolderCardData, SortedMenusData } from "../../hooks/useFetch";
interface ModalProps {
  folderData: FolderCardData[] | undefined;
  folderMenus: SortedMenusData[] | undefined;
  title: string;
  isShowModal: (modalState: {
    linkModal: boolean;
    folderAddModal: boolean;
    shareAddModal: boolean;
    editAddModal: boolean;
    deleteAddModal: boolean;
    linkDeleteModal: boolean;
  }) => void;
  linkAddModal?: boolean;
  folderAddModal?: boolean;
  shareModal?: boolean;
  editModal?: boolean;
  deleteModal?: boolean;
  linkDeleteModal?: boolean;
  dataUrl?: string;
  menusId?: number | null;
}
const Modal = ({
  folderData,
  folderMenus,
  title,
  isShowModal,
  linkAddModal,
  folderAddModal,
  shareModal,
  editModal,
  deleteModal,
  linkDeleteModal,
  dataUrl,
  menusId,
}: ModalProps) => {
  const handleClickExit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    isShowModal({
      linkModal: false,
      folderAddModal: false,
      shareAddModal: false,
      editAddModal: false,
      deleteAddModal: false,
      linkDeleteModal: false,
    });
  };
  return (
    <div className="modal">
      <div
        className={linkAddModal ? "modal-container" : "small-modal-container"}
      >
        <h2 className="modal-title">{title}</h2>
        <a className="modal-button-close" href="/" onClick={handleClickExit}>
          <img src={buttonClose} alt="닫기" />
        </a>
        {linkDeleteModal ? <ModalDelete link={dataUrl} /> : null}
        {deleteModal ? <ModalDelete /> : null}
        {editModal ? <ModalEdit /> : null}
        {shareModal ? <ModalShare menusId={menusId as number} /> : null}
        {folderAddModal ? <ModalFolderAdd /> : null}
        {linkAddModal ? (
          <ModalLinkAdd folderData={folderData} folderMenus={folderMenus} />
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
