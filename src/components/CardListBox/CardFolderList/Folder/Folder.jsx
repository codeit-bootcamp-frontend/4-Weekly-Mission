import styles from "./Folder.module.scss";

export default function Folder({ folder }) {
  return <button className={styles.folder}>{folder.name}</button>;
}
