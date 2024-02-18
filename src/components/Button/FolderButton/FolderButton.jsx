import React from 'react'
import styles from './folderButton.module.css'

function FolderButton({children, onClick, ischecked}) {
  return (
    <button className={`${styles.btn} ${ischecked ? styles.checked : ''}`} onClick={onClick}>{children}</button>
  )
}

export default FolderButton
