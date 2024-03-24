import CardSearchCancelIcon from "@/assets/svg/CardSearchCancelIcon";
import CardSearchInputIcon from "@/assets/svg/CardSearchInputIcon";
import styles from "./CardSearchInput.module.scss";

interface CardSearchInput {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchInputCancel: () => void;
  value: string;
}

export default function CardSearchInput({
  handleInputChange,
  handleSearchInputCancel,
  value,
}: CardSearchInput) {
  return (
    <div className={styles.CardSearchInput}>
      <CardSearchInputIcon />
      <input
        className={styles.input}
        onChange={(e) => handleInputChange(e)}
        placeholder="링크를 검색해 보세요."
        value={value}
      />
      <div
        className={styles.cancelIcon}
        onClick={() => handleSearchInputCancel()}
      >
        <CardSearchCancelIcon />
      </div>
    </div>
  );
}
