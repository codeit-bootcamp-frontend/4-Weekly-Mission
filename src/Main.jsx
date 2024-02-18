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

function Main() {
  const [userInfo, setUserInfo] = useState([]);
  const [userLoadingError, getUserAsync] = useAsync(getUser);

  // 유저 정보 요청
  const handleLoadUser = async () => {
    let result = await getUserAsync();
    if (!result) return;

    setUserInfo(result.data[0]);
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <Container>
      <Header
        userInfo={userInfo}
        userLoadingError={userLoadingError}
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
