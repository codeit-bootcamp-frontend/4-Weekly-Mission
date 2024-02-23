import { ModalContentFolder } from "./ModalContentFolder";

export const ModalContent = ({ modalText, children, folderName }) => {
  return (
    <div>
      {children}
      <div>{modalText}</div>
      <ModalContentFolder folderName={folderName} />
    </div>
  );
};
