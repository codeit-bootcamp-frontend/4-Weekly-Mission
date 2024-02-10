import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { getUserData } from "../../Api/api";

function Index() {
  // 함수 이름을 대문자로 변경
  const [user, setUser] = useState({
    email: null,
    id: null,
    name: null,
    profileImageSource: null,
  });

  async function userDataHandler() {
    const userData = await getUserData();
    setUser(userData);
  }

  useEffect(() => {
    userDataHandler();
  }, []);

  return (
    <>
      <Header
        email={user.email}
        profileImageSource={user.profileImageSource}
      />
      <Footer />
    </>
  );
}

export default Index;
