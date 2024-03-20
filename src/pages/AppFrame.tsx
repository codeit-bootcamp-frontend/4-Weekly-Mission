import { Outlet } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";
import "./AppFrame.css";
import HeaderFrame from "../components/HeaderFrame";

function AppFrame() {
  return (
    <>
      <HeaderFrame />
      <main>
        <Outlet />
      </main>
      <BottomNavBar />
    </>
  );
}

export default AppFrame;
