import '../styles/FolderContent.css';

const FolderContent = ({ children }) => {
  return (
    <main className="folder-content">
      {children}
    </main>
  );
}

export default FolderContent;
