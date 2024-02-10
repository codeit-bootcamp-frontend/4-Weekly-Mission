import "./App.css";
import "./global.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { useEffect, useState } from "react";
import getUser from "./util/getUser";

function App() {
  // profile이 제대로 적용되지 않는 문제
  let profile;
  async function getProfile() {
    const user = await getUser();
    const { email, profileImageSource } = user || {};
    profile = user ? { email, profileImageSource } : null;
    return profile;
  }
  useEffect(() => {
    profile = getProfile();
    console.log(profile);
  }, [profile]);

  return (
    <div className="App">
      <NavigationBar profile={profile} />
      <Footer />
    </div>
  );
}

export default App;
