import Nav from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import { getUserInfo } from "./api";
import useAsync from "./components/hooks/useAsync";
import { Outlet } from "react-router";

function App() {
  const { result } = useAsync(getUserInfo);
  const { data } = result || {};
  const userData = data ? data[0] : "";

  return (
    <>
      <Nav email={userData.email} imgSrc={userData.image_source} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
