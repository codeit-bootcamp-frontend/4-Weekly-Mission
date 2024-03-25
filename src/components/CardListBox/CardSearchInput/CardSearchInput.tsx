import CardSearchInputIcon from "@/assets/svg/CardSearchInputIcon";
import styles from "./CardSearchInput.module.scss";
import CardSearchCancelIcon from "@/assets/svg/CardSearchCancelIcon";

interface CardSearchInput {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchInputCancel: () => void;
  value: string;
}

export default function CardSearchInput({
  handleInputChange,
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
        type="search"
      />
      <div className={styles.cancelIcon}>
        <CardSearchCancelIcon />
      </div>
      {/* 조금만 더 생각해볼게요  */}
      {/* <div
        className={styles.cancelIcon}
        onClick={() => handleSearchInputCancel()}
      >
        <CardSearchCancelIcon />
      </div> */}
    </div>
  );
}
