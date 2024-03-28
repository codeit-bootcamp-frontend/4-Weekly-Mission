import { useGetFolders } from '@/apis/useGetFolders';
import AddLinkModal from '@/components/modal/addLink/AddLinkModal';
import UiLinkForm from '@/components/linkForm/UiLinkForm';
import { KeyboardEventHandler, useState } from 'react';

type LinkFormType = {
  disableLinkForm: boolean;
};

const LinkForm = ({ disableLinkForm }: LinkFormType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const closeModal = () => {
    setSelectedFolderId(null);
    setIsModalOpen(false);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      <UiLinkForm onSubmit={() => setIsModalOpen(true)} disableLinkForm={disableLinkForm} />
      <AddLinkModal
        isOpen={isModalOpen}
        folders={folders}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default LinkForm;
