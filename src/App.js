import Header from "./components/header/Header";
import LinkSearchInput from "./components/main/LinkSearchInput";
import FolderList from "./components/main/FolderList";
import Footer from "./components/footer/Footer";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="main_wrapper">
        <LinkSearchInput />
        <FolderList />
      </div>
      <Footer />
    </>
  );
}

export default App;
