import styles from "./SelectMenu.module.css";

function SelectMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.nonClicked}>삭제하기</div>
      <div className={styles.clicked}>폴더에 추가</div>
    </div>
  );
}

export default SelectMenu;
