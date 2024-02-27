import "../colors.css";
import "../global.css";
import Shared from "../components/Shared/Shared";
import { Layout } from "../components/common/Layout/Layout";
import { useGetUser } from "../hooks/useGetUser";

function SharedPage() {
  const { data } = useGetUser();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <div className="App">
      <Layout sticky={true} profile={profile}>
        <Shared />
      </Layout>
    </div>
  );
}

export default SharedPage;
