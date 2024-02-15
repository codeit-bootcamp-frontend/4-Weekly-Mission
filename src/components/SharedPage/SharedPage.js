import useGetFolder from "../../hooks/useGetFolder";
import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import ReadCard from "../ReadCard";
import SearchBar from "../SearchBar/SearchBar";
import "./SharedPage.css";

function SharedPage() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <div className="SharedPage">
      <Header
        profileImage={profileImage}
        ownerName={ownerName}
        folderInfo={folderName}
      />
      <div className="SharedPage-items">
        <SearchBar />
        <CardList>
          {links?.map((link) => (
            <ReadCard key={link?.id} {...link} />
          ))}
        </CardList>
      </div>
    </div>
  );
}

export default SharedPage;
