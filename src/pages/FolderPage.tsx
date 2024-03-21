import FolderList from "../components/FolderPage/FolderList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddLinkBar from "../components/FolderPage/AddLinkBar";
import SearchBar from "../components/SearchBar";

const FolderPage = () => {
  return (
    <>
      <Header />
      <main>
        <AddLinkBar />
        <SearchBar />
        <FolderList />
      </main>
      <Footer />
    </>
  );
};
export default FolderPage;
