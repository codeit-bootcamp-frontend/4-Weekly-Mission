import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { getUserData } from "./Api/api";

function App() {
  const [user, setUser] = useState({
    email: null,
    id: null,
    name: null,
    profileImageSource: null,
  });

  async function userDataHandler() {
    const userData = await getUserData();
    setUser(userData);
  }

  useEffect(() => {
    userDataHandler();
  }, []);
  return (
    <div className="App">
      <Header
        email={user.email}
        profileImageSource={user.profileImageSource}
      />
      <Footer />
    </div>
  );
}

export default App;
