import { useGetFolder } from "../hooks/useGetFolder";

import styles from "./SharedPage.module.css";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import Folder from "../components/Folder/Folder";
import Footer from "../components/Footer/Footer";

const SharedPage = () => {
  const { data } = useGetFolder();
  const { folder } = data ?? {};

  return (
    <>
      <NavigationBar />
      <main className={styles.main}>
        {folder && <Folder folder={folder} />}
      </main>
      <Footer />
    </>
  );
};

export default SharedPage;
