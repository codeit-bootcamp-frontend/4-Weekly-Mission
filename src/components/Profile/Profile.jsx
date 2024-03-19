import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import useGet from "../../hooks/useGet";

export default function Profile() {
  const url = `https://bootcamp-api.codeit.kr/api/sample/folder`;
  const [fetchData, setFetchData] = useState({
    name: null,
    owner: {
      name: null,
      profileImageSource: null,
    },
  });
  const { data, isLoading } = useGet(url);

  useEffect(() => {
    if (!isLoading) {
      setFetchData(data.folder);
      console.log(data.folder.name);
    }
  }, [data, isLoading]);

  return (
    <section className={styles.ProfileBox}>
      <article className={styles.ProfileInfos}>
        <img
          className={styles.profileImg}
          src={fetchData.owner.profileImageSource}
          alt="user profile image"
        />
        <p className={styles.profileName}>{fetchData.owner.name}</p>
        <span className={styles.folderName}>{fetchData.name}</span>
      </article>
    </section>
  );
}
