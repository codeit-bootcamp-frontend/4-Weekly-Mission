import styles from '../css/LinkAdd.module.css'

function LinkAdd() {
  return (
    <div className={styles.header}>
      <div className={styles.linkAdd}>
        <div className={styles.linkIcon}></div>
        <input type="text" name="linkAdd" placeholder="링크를 추가하세요" />
        <button>추가하기</button>
      </div>
    </div>
  )
}

export default LinkAdd;