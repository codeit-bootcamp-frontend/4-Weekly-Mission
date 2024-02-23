export const ModalContent = ({ modalText, children }) => {
  return (
    <div>
      {children}
      <div>{modalText}</div>
    </div>
  );
};
