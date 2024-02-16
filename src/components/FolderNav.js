import '../style/folderNav.css';
import AddLinkBar from './AddLinkBar';

function SharedNav() {
  return (
    <nav className="nav">
      <div className="nav-item">
        <AddLinkBar />
      </div>
    </nav>
  );
}

export default SharedNav;
