import ModalContainer from "./ModalContainer";

const ModalDeleteLink = ({ isOpen, onClose, url }) => {
  const deleteLinkContent = (
    <>
      <h2 className="title">링크 삭제</h2>
      <p>{url}</p>
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
