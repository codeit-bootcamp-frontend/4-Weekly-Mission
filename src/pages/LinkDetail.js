import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styles from "./css/LinkDetail.module.css";

const LinkDetail = () => {
  const { linkId } = useParams();
  return (
    <>
      <Header />
      <div className={styles.LinkDetail}>
        <h1>Here is {linkId}!</h1>
      </div>
    </>
  );
};

export default LinkDetail;
