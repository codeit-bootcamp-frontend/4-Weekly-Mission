import CardList from "./components/cardlist/CardList";
import Foot from "./components/foot/Foot";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import { getUserData } from "./api";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);

  const handleLoad = async () => {
    try {
      const response = await getUserData();
      setUserData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Nav />
      <Profile userData={userData} />
      <div className="container">
        <CardList userData={userData} />
      </div>
      <Foot />
    </div>
  );
}

export default App;
