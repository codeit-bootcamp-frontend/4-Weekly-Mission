import ModalContainer from "./ModalContainer";

const ModalDeleteLink = ({ isOpen, onClose }) => {
  const deleteLinkContent = (
    <>
      <h2>링크 삭제</h2>
      <p></p>
      <button className="redButton">삭제하기</button>
    </>
  );

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      children={deleteLinkContent}
    />
  );
};
export default ModalDeleteLink;
