import { useGetData } from "./Hooks/useAsync";
import styles from "../styles/Profile.module.css";

// SharedHeader의 Profile 부분
function Profile() {
  const { data, error, loading } = useGetData("/sample/folder");

  if (!data) return <div>Profile data가 null입니다.</div>;
  if (loading) return <div>Profile 로딩중...</div>;
  if (error) return <div>Profile에 에러가 발생했습니다.</div>;

  console.log(data);

  return (
    <div className={styles.profile}>
      <div className={styles.profile_container}>
        <div className={styles.avatar_and_username}>
          <img
            className={styles.avatar}
            src={data.folder?.owner.profileImageSource}
            alt="profile"
          />
          <span className={styles.username}>{data.folder?.owner.name}</span>
        </div>
        <span className={styles.foldername}>{data.folder?.name}</span>
      </div>
    </div>
  );
}

export default Profile;
