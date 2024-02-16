import styles from "./LinkList.module.css";
import LinkItem from "./LinkItem";

function LinkList({ linkData }) {
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
