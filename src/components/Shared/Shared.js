import { useGetFolder } from "../../hooks/useGetFolder";
import Header from "./Header/Header";
import ReadCard from "./ReadCard";
import "./Shared.css";
import CardList from "../common/CardList/CardList";
import SearchBar from "../common/SearchBar/SearchBar";

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
