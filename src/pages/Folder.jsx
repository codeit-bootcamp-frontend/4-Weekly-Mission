import React, { useEffect, useState } from "react";
import Header from "../components/common/header/Header";
import { getSampeUser, getSampleFolder } from "../utils/Api";

function Folder() {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);

  useEffect(() => {
    getSampeUser().then(setUser);
    getSampleFolder().then(setFolder);
  }, []);

  return (
    <main>
      <Header user={user} />
    </main>
  );
}

export default Folder;
