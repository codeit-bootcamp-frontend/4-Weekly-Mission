function ModalHeader({ modalHeaderName, modalHeaderContent }) {
  return (
    <div>
      <h2>{modalHeaderName}</h2>
      {modalHeaderContent && <p>{modalHeaderContent}</p>}
    </div>
  );
}

export default ModalHeader;
