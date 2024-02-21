import shareImg from '../assets/folder/share.svg';
import renameImg from '../assets/folder/pen.svg';
import deleteImg from '../assets/folder/delete.svg';

import { TOTAL_LIST_NAME } from '../constants/folder';

const FOLDER_EDIT_ICONS = Object.freeze([
  { src: shareImg, name: '공유' },
  { src: renameImg, name: '이름변경' },
  { src: deleteImg, name: '삭제' }
]);

const FolderEdit = ({ folderName }) => {
  if (folderName === TOTAL_LIST_NAME) {
    return <></>
  }

  return (
    <div className='folder-edits'>
      {FOLDER_EDIT_ICONS.map(({ src, name }) => (
        <div className='folder-edit' key={name}>
          <img src={src} alt={name} />
          <span className='edit-text'>{name}</span>
        </div>
      ))}
    </div>
  )
}

export default FolderEdit;