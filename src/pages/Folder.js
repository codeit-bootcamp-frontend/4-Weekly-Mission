import AddLink from "../components/folder/AddLink";
import LinkSearch from "../components/LinkSearch";
import Navbar from "../components/Navbar";
import "./Folder.css";
import FolderLinkList from "../components/folder/FolderLinkList";
import Footer from "../components/Footer";
import "./Main.css";

function Folder() {
  return (
    <>
      <Navbar />
      <div className="add-link-background">
        <AddLink />
      </div>
      <div className="link-search-card-list">
        <LinkSearch />
        <FolderLinkList />
      </div>
      <Footer />
    </>
  );
}

export default Folder;
