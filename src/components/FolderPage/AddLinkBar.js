import "./AddLinkBar.css";
import linkIcon from "../../assets/linkIcon.svg";
import ModalAddFolder from "../Modal/ModalAddToFolder";
import useModal from "../../hooks/useModal";

const AddLink = () => {
  const { showModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div className="addLinkContainer">
      <form className="addLinkForm">
        <label htmlFor="linkInput" className="hiddenLabel">
          링크를 추가해보세요.
        </label>
        <img src={linkIcon} alt="link icon" />
        <input
          type="text"
          id="linkInput"
          placeholder="링크를 추가해 보세요."
          className="addLinkInput"
        />
        <button onClick={handleOpenModal}>추가하기</button>
        <ModalAddFolder isOpen={showModal} onClose={handleCloseModal} />
      </form>
    </div>
  );
};

export default AddLink;
