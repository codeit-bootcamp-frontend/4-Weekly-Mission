import shareImg from '../assets/folder/share.svg';
import renameImg from '../assets/folder/pen.svg';
import deleteImg from '../assets/folder/delete.svg';

const FOLDER_EDITS = Object.freeze([
  { src: shareImg, name: "공유" },
  { src: renameImg, name: "이름변경" },
  { src: deleteImg, name: "삭제" },
]);

const TOTAL_LIST = '전체';

const FolderEdit = ({folderList}) => {
  if (folderList === TOTAL_LIST) {
    return <></>
  }

  return (
    <div className='folder-edits'>
      {FOLDER_EDITS.map(({ src, name }) => (
        <div className='folder-edit' key={name}>
          <img src={src} alt={name}></img>
          <span className='edit-text'>{name}</span>
        </div>
      ))}
    </div>
  )
}

export default FolderEdit;