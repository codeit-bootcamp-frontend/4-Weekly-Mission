import { useFetch } from "../../hooks/useFetch";
import styles from "./LinkList.module.css";
import LinkItem from "./LinkItem";

const linkDataUrl = "https://bootcamp-api.codeit.kr/api/users/3/links";

function LinkList() {
  const { data: linkData } = useFetch(linkDataUrl);
  console.log(linkData);
  return (
    <div className={styles.link_list_wrapper}>
      {linkData?.data.map(
        ({ created_at, description, id, image_source, title, url }) => {
          return <LinkItem key={id} title={title} />;
        }
      )}
    </div>
  );
}

export default LinkList;
