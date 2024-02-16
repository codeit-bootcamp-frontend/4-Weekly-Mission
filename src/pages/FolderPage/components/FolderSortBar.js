import SortButton from './SortButton';
import '../styles/folderSortBar.css';
import FolderAddButton from './FolderAddButton';
function FolderSortBar() {
  const SORT_BUTTONS = [
    '전체',
    '⭐️ 즐겨찾기',
    '코딩 팁',
    '채용 사이트',
    '유용한 글',
    '나만의 장소',
  ];
  return (
    <div className="folder__bar">
      <div className="folder__bar--sort-buttons">
        {SORT_BUTTONS.map((text) => (
          <SortButton text={text} />
        ))}
      </div>
      <div className="folder__bar--add-button">
        <FolderAddButton></FolderAddButton>
      </div>
    </div>
  );
}
export default FolderSortBar;
