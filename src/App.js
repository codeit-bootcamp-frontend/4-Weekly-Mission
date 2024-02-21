import "./App.css";
import "./global.css";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useEffect, useState } from "react";
import getSample from "./util/getSample";
import Folder from "./components/Folder/Folder";

function App() {
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    getSample("folder")
      .then((res) => {
        const { folder } = res;
        return folder;
      })
      .then(setFolder);
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <main className="App__main">{folder && <Folder folder={folder} />}</main>
      <Footer />
    </div>
  );
}

export default App;
