import { useGetFolder } from "../hooks/useGetFolder";

import SharedFolder from "../components/SharedFolder/SharedFolder";
import Layout from "../components/Layout/Layout";

const SharedPage = () => {
  const { data } = useGetFolder();
  const { folder } = data ?? {};

  return (
    <>
      <Layout isSticky>{folder && <SharedFolder folder={folder} />}</Layout>
    </>
  );
};

export default SharedPage;
