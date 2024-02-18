const TOTAL_LIST = '전체';

const FolderList = ({folderLists, totalHandler, listHandler}) => {
  if (!folderLists.length) {
    return <></>
  }

  return (
    <div className='container-folder-list'>
      <div className='folder-list'>
        <button className='folder-list_btn' onClick={totalHandler}>{TOTAL_LIST}</button>
        {folderLists.map(({ id, name }) => (
          <button key={id} className='folder-list_btn' onClick={() => listHandler(name, id)}>
            {name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FolderList;