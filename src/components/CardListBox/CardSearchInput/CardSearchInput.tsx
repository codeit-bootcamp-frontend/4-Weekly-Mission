import CardSearchInputIcon from "../../../assets/svg/CardSearchInputIcon";
import styles from "./CardSearchInput.module.scss";

export default function CardSearchInput() {
  return (
    <form className={styles.CardSearchInput}>
      <CardSearchInputIcon />
      <input className={styles.input} placeholder="링크를 검색해 보세요." />
    </form>
  );
}
