import "../colors.css";
import "../global.css";
import React from "react";
import { Layout } from "../components/common/Layout/Layout.tsx";
import { useGetUserById } from "../hooks/useGetUser.tsx";
import LinkBar from "../components/Folder/LinkBar/LinkBar.tsx";
import Folder from "../components/Folder/Folder.tsx";

interface Profile {
  email: string;
  profileImageSource: string;
}

function FolderPage() {
  const { data } = useGetUserById();
  const userData = data?.data[0];
  const { email, image_source } = userData || {};

  const profile: Profile | null = data
    ? { email, profileImageSource: image_source }
    : { email: "", profileImageSource: "" };

  return (
    <div className="App">
      <Layout isSticky={false} profile={profile}>
        <LinkBar />
        <Folder />
      </Layout>
    </div>
  );
}

export default FolderPage;
