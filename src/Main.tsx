import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { getUser } from "./api";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import useAsync from "./components/hooks/useAsync";

const Container = styled.div`
  min-height: 100%;
`;

interface UserInfo {
  id: number;
  name: string;
  email: string;
  image_source: string;
}

function Main() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: 0,
    name: "",
    email: "",
    image_source: "",
  });
  const [userLoadingError, getUserAsync] = useAsync(getUser);

  // 유저 정보 요청
  const handleLoadUser = async () => {
    if (typeof getUserAsync === "function") {
      let result = await getUserAsync();
      if (!result) return;
      setUserInfo(result.data[0]);
    }
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <Container>
      <Header
        userInfo={{
          email: userInfo.email,
          image_source: userInfo.image_source,
        }}
        // userLoadingError={userLoadingError}
        $isHeader={true}
      />
      <div>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
}

export default Main;
