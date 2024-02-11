import getUser from "../api";
import "./App.css";
import NavigationBar from "./NavigationBar";
import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getProFile() {
      const user = await getUser();
      if (user) {
        const { email, profileImageSource } = user;
        setProfile({ email, profileImageSource });
      }
    }

    getProFile();
  }, []);

  return (
    <div className="App">
      <NavigationBar profile={profile} />
    </div>
  );
}

export default App;
