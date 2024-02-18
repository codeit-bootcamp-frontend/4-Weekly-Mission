import Layout from "../../components/Layout/Layout";
import "./FolderPage.css";

const FolderPage = ({ folderHeader, searchBar }) => {
  return (
    <Layout>
      <div className="folderPage">
        {folderHeader}
        <div className="folderPage-content">
          {searchBar}
          <div className="folderPage-noLink">저장된 링크가 없습니다</div>
        </div>
      </div>
    </Layout>
  );
};

export default FolderPage;
