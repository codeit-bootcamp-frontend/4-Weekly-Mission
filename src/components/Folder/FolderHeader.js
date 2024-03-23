import './Folder.css';
import AddLinkBar from '../AddLinkBar/AddLinkBar';

function FolderHeader() {
  return (
    <nav className="nav">
      <div className="nav-item">
        <AddLinkBar />
      </div>
    </nav>
  );
}

export default FolderHeader;
