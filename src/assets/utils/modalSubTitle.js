export const modalSubTitle = ({
  ModalContent,
  currentCardLink,
  currentFolderName,
}) => {
  if (ModalContent === 'DeleteLinkModal' || ModalContent === 'AddLink') {
    return currentCardLink;
  }
  if (ModalContent === 'DeleteFolderModal' || ModalContent === 'SharingModal') {
    return currentFolderName;
  }
  return null;
};
