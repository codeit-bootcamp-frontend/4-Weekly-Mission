import { useGetFolder } from "../hooks/useGetFolder";

import styles from "./SharedPage.module.css";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import SharedFolder from "../components/SharedFolder/SharedFolder";
import Footer from "../components/Footer/Footer";

const SharedPage = () => {
  const { data } = useGetFolder();
  const { folder } = data ?? {};

  return (
    <>
      <NavigationBar isSticky />
      <main className={styles.main}>
        {folder && <SharedFolder folder={folder} />}
      </main>
      <Footer />
    </>
  );
};

export default SharedPage;
