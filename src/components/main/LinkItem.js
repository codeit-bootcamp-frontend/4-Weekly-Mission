import styles from "./Linkitem.module.css";

function FolderPageLinkItem({ title }) {
  return (
    <div className={styles.link_item_wrapper}>
      <h1>{title}</h1>
    </div>
  );
}

export default FolderPageLinkItem;
