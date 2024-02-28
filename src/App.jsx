import { Outlet } from 'react-router-dom';

import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <section className={styles.layout}>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default App;
