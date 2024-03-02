import styles from "./Layout.module.css";

import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = ({ children, isSticky }) => {
  return (
    <div className={styles.layout}>
      <NavigationBar isSticky={isSticky} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
