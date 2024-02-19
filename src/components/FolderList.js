import '../styles/FolderList.css';
import iconPlus from '../assets/icons/plus.svg';
import iconShare from '../assets/icons/share.svg';
import iconPen from '../assets/icons/pen.svg';
import iconDelete from '../assets/icons/delete.svg';

const FolderList = ({ folderList }) => {
  return (
    <>
      <div className='folder-list'>
        <div className='folder-list-container'>
          <a className='folder'>전체</a>
          {folderList ? (
            <>
              {folderList.map((folder) => (
                <a className='folder' key={folder.id}>{folder.name}</a>
              ))}
            </>
          ) : (
            null
          )}
        </div>
        <div className='add-folder-container'>
          <a className='add-folder'>폴더 추가</a>
          <img className="add-folder-icon" src={iconPlus} alt="폴더 추가하기." />
        </div>
      </div>

      <div className="folder-title">
        <h2 className="folder-name">폴더 이름</h2>
        <div className="folder-menu">
          <img className="folder-menu-icon" src={iconShare} alt="폴더 공유하기." />
          <a className="folder-menu-text">공유</a>
          <img className="folder-menu-icon" src={iconPen} alt="폴더 이름 변경하기." />
          <a className="folder-menu-text">이름 변경</a>
          <img className="folder-menu-icon" src={iconDelete} alt="폴더 삭제하기." />
          <a className="folder-menu-text">삭제</a>
        </div>
      </div>
    </>
  );
}

export default FolderList;
