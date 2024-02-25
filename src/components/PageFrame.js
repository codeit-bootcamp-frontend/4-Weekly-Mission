import Footer from '../components/area/Footer';
import Nav from '../components/area/Nav';

import styles from './PageFrame.module.css';

function App({ children }) {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
