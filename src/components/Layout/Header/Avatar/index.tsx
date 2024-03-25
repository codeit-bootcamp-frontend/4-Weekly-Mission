/** @jsxImportSource @emotion/react */
import Button from "../../../utils/Button/Button";
import useGetUser from "../../../../hooks/useGetUser";
import styles from "./styles";
import "../../../../styles/common.css";


const Avatar = () => {
  const { userInfo, isLoading } = useGetUser();

  return (
    <div css={styles.div}>
      <div css={styles.imgWrapper}>
        <img src={userInfo.avatar} css={styles.image} alt="계정이미지" />
      </div>
      <p css={styles.p}>{userInfo.email}</p>
      <Button
        name="로그인"
        size="small"
        isLoading={isLoading}
        key={userInfo.email}
        css={styles.btn}
      />
    </div>
  );
};

export default Avatar;
