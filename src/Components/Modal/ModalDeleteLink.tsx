import ModalContainer from "./ModalContainer";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const ModalDeleteLink = ({ isOpen, onClose, url }: Props) => {
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
