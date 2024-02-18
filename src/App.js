import "./App.css";
import "./global.css";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useEffect, useState } from "react";
import getSample from "./util/getSample";
import Folder from "./components/Folder/Folder";

function App() {
  const [profile, setProfile] = useState(null);
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    getSample("user").then(setProfile);
    getSample("folder")
      .then((res) => {
        const { folder } = res;
        return folder;
      })
      .then(setFolder);
  }, []);

  return (
    <div className="App">
      <NavigationBar profile={profile} />
      <main className="App__main">
        {folder && <Folder folder={folder} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
