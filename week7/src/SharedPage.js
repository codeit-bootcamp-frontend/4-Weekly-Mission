import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Input from "./components/Input.js";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";
import useFetch from "./hooks/useFetch.js";
function SharedPage() {
  const userUrl = "https://bootcamp-api.codeit.kr/api/sample/user";
  const folderUrl = "https://bootcamp-api.codeit.kr/api/sample/folder";

  const { data: userData } = useFetch(userUrl);
  const { data: folderData } = useFetch(folderUrl);

  useEffect(() => {}, [userData, folderData]);

  return (
    <div className="App">
      <Header
        user={userData}
        folderName={folderData?.folder?.name}
        owner={folderData?.folder?.owner}
      />
      <Input />
      <Card links={folderData?.folder?.links} />
      <Footer />
    </div>
  );
}

export default SharedPage;
