import { Outlet } from "react-router-dom";
import Footer from "./Footer";

/**
 *
 * @returns 현재 임시로 구성된 아웃렛 컴포넌트입니다. 추후 다른 페이지를 추가할 때 재구성할 계획입니다.
 */
export default function LayoutOutlet() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
