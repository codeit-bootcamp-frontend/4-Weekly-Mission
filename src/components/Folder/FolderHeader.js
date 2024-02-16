import './folder.css';
import AddLinkBar from '../AddLinkBar';

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
