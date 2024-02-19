import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FolderNav from "./FolderNav";
import FolderCardPage from "./FolderCardPage";
import "./Folder.css";

function Folder() {
  return (
    <>
      <Header />
      <main id="wrap">
        <FolderNav />
        <FolderCardPage />
      </main>
      <Footer />
    </>
  );
}

export default Folder;
