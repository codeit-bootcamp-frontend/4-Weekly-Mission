import useGetFolder from "../../hooks/useGetFolder";
import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import ReadCard from "../ReadCard";
import SearchBar from "../SearchBar/SearchBar";
import "./Shared.css";

function Shared() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <div className="Shared">
      <Header
        profileImage={profileImage}
        ownerName={ownerName}
        folderInfo={folderName}
      />
      <div className="Shared-items">
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

export default Shared;
