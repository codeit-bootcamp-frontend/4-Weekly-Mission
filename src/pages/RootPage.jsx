import Header from "components/common/header/Header";
import { Outlet } from "react-router-dom";

function RootPage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootPage;
