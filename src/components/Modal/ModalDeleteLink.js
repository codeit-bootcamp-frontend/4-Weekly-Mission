import ModalContainer from "./ModalContainer";

const ModalDeleteLinkContent = ({ url }) => (
  <>
    <h2>링크 삭제</h2>
    <p>{url}</p>
    <button className="redButton">삭제하기</button>
  </>
);

const ModalDeleteLink = ({ isOpen, onClose, url }) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
    ><ModalDeleteLinkContent url={url} /></ModalContainer>
  );
};
export default ModalDeleteLink;
