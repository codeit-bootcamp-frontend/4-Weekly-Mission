import "../colors.css";
import "../global.css";
import Shared from "../components/Shared/Shared";
import { Layout } from "../components/Layout/Layout";

function SharedPage() {
  return (
    <div className="App">
      <Layout sticky={true}>
        <Shared />
      </Layout>
    </div>
  );
}

export default SharedPage;
