/** @jsxImportSource @emotion/react */
import styles from "./styles";
import Card from "./Card/index";
import "../../styles/reset.css";
import "../../styles/common.css";

const Cards = ({ items }) => {
  return (
    <>
      <div css={styles.div}>
        {items?.map((item) => (
          <Card item={item} key={item.id} css={styles.li} />
        ))}
      </div>
      {!items && (
        <div css={styles.nullDiv}>
          <p> 저장된 링크가 없습니다. </p>
        </div>
      )}
    </>
  );
};

export default Cards;
