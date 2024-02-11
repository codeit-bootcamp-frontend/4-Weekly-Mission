import { getCardData } from "./api";
import BodySection from "./components/Body/BodySection";
import Footer from "./components/Footer/Footer";
import GeneralNavigationBar from "./components/GNB/GeneralNavigationBar";
import HeroSeciton from "./components/HeroSection/HeroSection";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const loadData = async () => {
    const { folder } = await getCardData();
    setData(folder.links);
    setUserName(folder.owner.name);
    setUserEmail(folder.owner.email);
    console.log(folder);
  };

  useEffect(() => {
    loadData();
    console.log(data);
  }, []);

  return (
    <div>
      <GeneralNavigationBar userName={userName} />
      <HeroSeciton userName={userName} />
      <BodySection data={data} />
      <Footer />
    </div>
  );
}

export default App;
