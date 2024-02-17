import "../colors.css";
import "../global.css";
import { Layout } from "../components/Layout/Layout";
import { useGetUserById } from "../hooks/useGetUser";
import LinkBar from "../components/LinkBar/LinkBar";

function FolderPage() {
  const { data } = useGetUserById();
  const userData = data?.data[0];
  const { email, image_source } = userData || {};
  const profile = data ? { email, profileImageSource: image_source } : null;
  return (
    <div className="App">
      <Layout sticky={false} profile={profile}>
        <LinkBar />
      </Layout>
    </div>
  );
}

export default FolderPage;
