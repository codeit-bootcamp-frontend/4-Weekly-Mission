import styles from "./Modal.module.css";

function AddToMyFolder({ selectedLink, categoryData }) {
  return (
    <>
      <div className={styles["ModalTitle"]}>폴더에 추가</div>
      <div className={styles["ModalSubtitle"]}>{selectedLink}</div>
      {categoryData?.map((link) => (
        <div key={link.name}>
          {link.name}
          {`${link?.link.count}개 링크`}
        </div>
      ))}
      <button>추가하기</button>
    </>
  );
}

export default AddToMyFolder;
