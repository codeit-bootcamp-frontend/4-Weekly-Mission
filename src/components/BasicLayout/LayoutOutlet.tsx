import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function LayoutOutlet() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
