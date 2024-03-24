import '../Folder.css';
import AddLinkBar from '../../AddLinkBar/AddLinkBar';

function TopContent() {
  return (
    <nav className="nav">
      <div className="nav-item">
        <AddLinkBar />
      </div>
    </nav>
  );
}

export default TopContent;
