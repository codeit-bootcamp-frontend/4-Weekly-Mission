import Button from "./components/Button";
import CloseIcon from "./components/CloseIcon";
import FolderList from "./components/FolderList";
import styles from "./styles/modal.module.css";

export default function ContentAdder({ modal, handleOnClickClose, value }) {
  const folderItems = [
    { name: "코딩팁", linkCount: 7 },
    { name: "채용 사이트", linkCount: 12 },
    { name: "유용한 글", linkCount: 30 },
    { name: "나만의 장소", linkCount: 3 },
  ];

  return (
    !modal && (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <CloseIcon handleOnClickClose={handleOnClickClose} />
          <p className={styles.title}>폴더에 추가</p>
          <p className={styles["sub-text"]}>{value}</p>
          <div className={styles["folder-list-container"]}>
            {folderItems.map((folder, index) => (
              <FolderList
                key={index}
                name={folder.name}
                linkCount={folder.linkCount}
              />
            ))}
          </div>
          <Button buttonColor="blue">추가하기</Button>
        </div>
      </div>
    )
  );
}
