import "../colors.css";
import "../global.css";
import React from "react";
import { Layout } from "../components/common/Layout/Layout.tsx";
import { useGetUser } from "../hooks/useGetUser.tsx";
import Shared from "../components/Shared/Shared.tsx";

interface Profile {
  email: string;
  profileImageSource: string;
}

function SharedPage() {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile: Profile = data
    ? { email, profileImageSource }
    : { email: "", profileImageSource: "" };

  return (
    <div className="App">
      <Layout isSticky={true} profile={profile}>
        <Shared />
      </Layout>
    </div>
  );
}

export default SharedPage;
