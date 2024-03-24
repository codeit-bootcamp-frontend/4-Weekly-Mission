// import "./AddLinkBar.css";
import linkIcon from "../images/link.svg";
import ModalAddToFolder from "./Modal/ModalAddToFolder";
import { useShowModal } from "../useHooks/useShowModal";

const AddLinkBar = () => {
  const { handleShowModal, showModal, setShowModal } = useShowModal();

  return (
    <header className="headerArea">
      <nav>
        <form>
          <div className="linkInputArea">
            <input
              placeholder="링크를 추가해 보세요"
              className="addLinks"
            ></input>
            <img src={linkIcon} alt="link icon" className="linkIcon"></img>
            <button className="addBtn" onClick={handleShowModal}>
              추가하기
            </button>
            {showModal && (
              <ModalAddToFolder
                isOpen={showModal}
                onClose={() => setShowModal(false)}
              />
            )}
          </div>
        </form>
      </nav>
    </header>
  );
};

export default AddLinkBar;
