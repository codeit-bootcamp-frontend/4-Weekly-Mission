import React, { useEffect, useState } from "react";
import styles from "../styles/FolderPage.module.css";
import { getRequestApi } from "../utils/requestApi";
import LinkCardComponent from "../components/LinkCardComponent";
import { useRequest } from "../hooks/useRequest";

const FolderPage = () => {
  const [folderInfo, setFolderInfo] = useState({});

  const { data, request } = useRequest({
    url: "api/sample/folder",
    method: "GET",
  });

  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    if (data) {
      setFolderInfo(data);
    }
  }, [data]);

  return (
    <>
      <section className={styles.folder_main_section}>
        <img
          src={folderInfo?.folder?.owner?.profileImageSource ?? ""}
          className={styles.folder_user_img}
        />
        <p className={styles.folder_user_name}>
          {folderInfo?.folder?.owner?.name ?? ""}
        </p>
        <strong className={styles.folder_name}>
          {folderInfo?.folder?.name ?? ""}
        </strong>
      </section>
      <section className={styles.folder_info_section}>
        <div className={styles.folder_search_input_box}>
          <img src="/images/Search.svg" />
          <input
            className={styles.folder_search_input}
            placeholder="링크를 검색해 보세요"
          />
        </div>
        <article className={styles.folder_card_body}>
          {folderInfo?.folder?.links?.map((e) => {
            return (
              <LinkCardComponent
                imgSrc={e.imageSource}
                createdAt={e.createdAt}
                desc={e.description}
                url={e.url}
              />
            );
          })}
        </article>
      </section>
    </>
  );
};

export default FolderPage;
