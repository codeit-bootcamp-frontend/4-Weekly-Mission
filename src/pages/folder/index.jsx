import Header from './header/Header';
import Content from './content/Content';

const Folder = ({ setIsOpen, setFolderName, folderList, folderId, setFolderId }) => {
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Content
        setIsOpen={setIsOpen}
        setFolderName={setFolderName}
        folderList={folderList}
        folderId={folderId}
        setFolderId={setFolderId}
      />
    </>
  );
};

export default Folder;
