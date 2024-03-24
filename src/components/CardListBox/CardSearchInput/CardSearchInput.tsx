import CardSearchInputIcon from "../../../assets/svg/CardSearchInputIcon";
import styles from "./CardSearchInput.module.scss";

interface CardSearchInput {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CardSearchInput({
  handleInputChange,
}: CardSearchInput) {
  return (
    <form className={styles.CardSearchInput}>
      <CardSearchInputIcon />
      <input
        className={styles.input}
        onChange={(e) => handleInputChange(e)}
        placeholder="링크를 검색해 보세요."
      />
    </form>
  );
}
