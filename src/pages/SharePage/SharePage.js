import Layout from "../../components/Layout/Layout";
import "./SharePage.css";

const SharePage = ({ folderInfo, searchBar, cardList }) => {
  return (
    <Layout>
      <div className="sharePage">
        {folderInfo}
        <div className="sharePage-content">
          {searchBar}
          {cardList}
        </div>
      </div>
    </Layout>
  );
};

export default SharePage;
