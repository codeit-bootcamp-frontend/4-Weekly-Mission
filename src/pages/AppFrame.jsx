import { Outlet } from "react-router-dom";
import "./AppFrame.font.css";

//TODO: AppFrame 완성 및 css 추가

function AppFrame() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default AppFrame;
