import "../css/Shared.css";
import Headerfolder from "../components/folderpage/Headerfolder";
import Gnbfolder from "../components/folderpage/Gnbfolder";
import Mainfolder from "../components/folderpage/Mainfolder";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Headerfolder />
      <Gnbfolder />
      <Mainfolder />
      <Footer />
    </>
  );
}

export default App;
