import { useEffect, useState } from "react";
import Nav from "./components/Navbar";
import { getFolderData, getUserInfo } from "./api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";

function App() {
  const [email, setEmail] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [name, setName] = useState("");
  const [links, setLinks] = useState([]);
  const [owner, setOwner] = useState({});

  const handleLoadUserInfo = async () => {
    let result;
    try {
      result = await getUserInfo();
    } catch (error) {
      console.error();
      return;
    }

    setEmail(result.email);
    setImgSrc(result.profileImageSource);
  };

  const handleLoadFolderData = async () => {
    let folderResult;
    try {
      folderResult = await getFolderData();
    } catch (error) {
      console.error();
      return;
    }

    const { folder } = folderResult;
    setName(folder.name);
    setLinks(folder.links);
    setOwner(folder.owner);
  };

  useEffect(() => {
    handleLoadUserInfo();
    handleLoadFolderData();
  }, []);

  return (
  <div className="body">
    <Nav email={email} imgSrc={imgSrc} />
    <Header name={name} owner={owner} />
    <SearchBar />
    <CardList links={links} />
    <Footer />
  </div>
  );
}
export default App;