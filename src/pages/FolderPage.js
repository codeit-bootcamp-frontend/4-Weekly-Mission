import "../colors.css";
import "../global.css";
import { Layout } from "../components/Layout/Layout";
import { useGetUserById } from "../hooks/useGetUser";

function FolderPage() {
  const { data } = useGetUserById();
  const userData = data?.data[0];
  const { email, image_source } = userData || {};
  const profile = data ? { email, profileImageSource: image_source } : null;
  return (
    <div className="App">
      <Layout sticky={false} profile={profile}></Layout>
    </div>
  );
}

export default FolderPage;
