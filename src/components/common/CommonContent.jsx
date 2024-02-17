import CommonContentSearch from "./CommonContentSearch";
import CardList from "./CardList";

function CommonContent(additionalContent) {
  return (
    <div>
      <CommonContentSearch />
      {additionalContent && <div>{additionalContent}</div>}
      <CardList />
    </div>
  );
}

export default CommonContent;
