import { TOTAL_LIST_NAME } from '../constants/folder';

const FolderList = ({ folderList, onTotalListClick, onListClick }) => {
  if (!folderList.length) {
    return null;
  }

  return (
    <div className='container-folder-list'>
      <div className='folder-list'>
        <button className='folder-list_btn' onClick={onTotalListClick}>{TOTAL_LIST_NAME}</button>
        {folderList.map(({ id, name }) => (
          <button key={id} className='folder-list_btn' onClick={() => onListClick(name, id)}>
            {name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FolderList;