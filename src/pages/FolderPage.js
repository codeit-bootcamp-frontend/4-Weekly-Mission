import FolderList from "../components/FolderList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddLinkBar from "../components/AddLinkBar";
import SearchBar from "../components/SearchBar";

const FolderPage = () => {
  return (
    <>
      <Header />
      <AddLinkBar />
      <SearchBar />
      <FolderList />
      <Footer />
    </>
  );
};
export default FolderPage;
