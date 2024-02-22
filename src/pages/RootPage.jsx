import React, { useEffect, useState } from "react";
import Header from "../components/common/header/Header";
import { Outlet } from "react-router-dom";
import { getSampeUser } from "../utils/Api";

function RootPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getSampeUser().then(setUser);
  }, []);

  return (
    <>
      <Header user={user} />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootPage;
