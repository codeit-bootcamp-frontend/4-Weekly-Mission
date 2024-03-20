'use client'

import FolderEdit from "./FolderEdit";

interface Props {
  folderName: string;
}

const TOTAL_LIST_NAME = "전체"

const FolderName = ({folderName}: Props) => {
  return (
    <div className='container-folder-edit'>
      <span>{folderName}</span>
      {folderName !== TOTAL_LIST_NAME && <FolderEdit />}
    </div>
  )
}

export default FolderName