const TOTAL_LIST_NAME = '전체';

const FolderList = ({folderList, totalHandler, listHandler}) => {
  if (!folderList.length) {
    return <></>
  }

  return (
    <div className='container-folder-list'>
      <div className='folder-list'>
        <button className='folder-list_btn' onClick={totalHandler}>{TOTAL_LIST_NAME}</button>
        {folderList.map(({ id, name }) => (
          <button key={id} className='folder-list_btn' onClick={() => listHandler(name, id)}>
            {name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FolderList;