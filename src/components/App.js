import './landing.css';
import Header from './Header/Header'
import Footer from './Footer'
import Body from './Body/Body'
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [folderRes, userRes] = await Promise.all([
          fetch("https://bootcamp-api.codeit.kr/api/sample/folder"),
          fetch("https://bootcamp-api.codeit.kr/api/sample/user"),
        ]);

        const [folderData, userData] = await Promise.all([
          folderRes.json(),
          userRes.json(),
        ]);

        setFolder(folderData.folder);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(user)
  console.log(folder)

  return (
    <>
      {folder && user && <Header folderData={folder} userData={user}/>}
      <Body />
      <Footer />
    </>
  );
}

export default App;
