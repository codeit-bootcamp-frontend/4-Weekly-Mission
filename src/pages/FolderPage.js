import FolderList from "../components/FolderList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddLinkBar from "../components/AddLinkBar";
import SearchBar from "../components/SearchBar";

const FolderPage = () => {
  return (
    <div>
      <Header />
      <AddLinkBar />
      <SearchBar />
      <FolderList />
      <Footer />
    </div>
  );
};

export default FolderPage;
