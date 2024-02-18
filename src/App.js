import { useState, useCallback, useEffect } from "react";
import Nav from "./components/Navbar";
import { getUserInfo } from "./api";
import Footer from "./components/Footer";
import useAsync from "./components/hooks/useAsync";
import { Outlet } from "react-router";

function App() {
  const [email, setEmail] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const handleLoadUserInfo = async () => {
    let result;
    try {
      result = await getUserInfo();
    } catch (error) {
      console.error();
      return;
    }
    const { data } = result;

    setEmail(data[0].email);
    setImgSrc(data[0].image_source);
  };

  useEffect(() => {
    handleLoadUserInfo();
  }, []);

  return (
    <>
      <Nav email={email} imgSrc={imgSrc} />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
