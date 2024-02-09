import LinkCard from "./linkCard";
import "../css/shared/sharedMain.css";
import SearchingBar from "./searchingBar";

function SharedMain(){
  return(
    <main>
      <div className="main">
        <SearchingBar />
        <div className="card-section">
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
        </div>
      </div>
    </main>
  );
}

export default SharedMain;