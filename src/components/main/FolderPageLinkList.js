import { useFetch } from "../../hooks/useFetch";
import styles from "./FolderPageLinkList.module.css";
import FolderPageFolderItem from "./FolderPageFolderItem";
const linkDataUrl = "https://bootcamp-api.codeit.kr/api/users/3/links";

function FolderPageLinkList() {
  const { data: linkData } = useFetch(linkDataUrl);
  console.log(linkData);
  return (
    <div className={styles.folder_page_link_list_wrapper}>
      {linkData?.data.map(
        ({ created_at, description, id, image_source, title, url }) => {
          return <FolderPageFolderItem key={id} title={title} />;
        }
      )}
    </div>
  );
}

export default FolderPageLinkList;
