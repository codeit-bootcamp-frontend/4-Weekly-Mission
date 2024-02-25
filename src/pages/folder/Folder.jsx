import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FolderNav from "./FolderNav";
import FolderCardPage from "./FolderCardPage";
import "./Folder.css";

function Folder() {
  return (
    <>
      <Header sharedSticky={false} />
      <main id="wrap">
        <FolderNav />
        <FolderCardPage />

        <Footer />
      </main>
    </>
  );
}

export default Folder;
