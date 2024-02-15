import FolderItem from "./FolderItem";
import styles from "./FolderList.module.css";
import { useFetch } from "../../hooks/useFetch";

const folderUrl = "https://bootcamp-api.codeit.kr/api/sample/folder";

function FolderList() {
  const { data: folderData } = useFetch(folderUrl);

  return (
    <div className={styles.folder_list_wrapper}>
      {folderData?.folder.links.map((i) => {
        return (
          <FolderItem
            folderTitle={i.title}
            folderImageSource={i.imageSource}
            folderDate={i.createdAt}
            folderUrl={i.url}
            key={i.id}
          />
        );
      })}
    </div>
  );
}

export default FolderList;
