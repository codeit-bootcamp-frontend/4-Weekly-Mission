import "./App.css";
import "./global.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { useEffect, useState } from "react";
import getUser from "./util/getUser";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUser().then(setProfile);
  }, []);

  return (
    <div className="App">
      <NavigationBar profile={profile} />
      <Footer />
    </div>
  );
}

export default App;
