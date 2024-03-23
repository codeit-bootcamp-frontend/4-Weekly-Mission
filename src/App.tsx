import Navbar from "layout/Navbar/Navbar";
import Footer from "layout/Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "assets/css/app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
