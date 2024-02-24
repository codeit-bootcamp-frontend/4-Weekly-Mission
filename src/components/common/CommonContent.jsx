import CommonContentSearch from "./CommonContentSearch";
// import CardList from "./CardList";
import style from "../../styles/CommonContent.module.css";

// SharedContent에는 additionalContent 없음X, FolderHeader에서는 additionalContent 있음O
function CommonContent(additionalContent) {
  // CommonContentSearch -> 링크 검색 부분(기능은 추후 구현)
  // CardList -> 카드 목록 부분(SharedContent와 FolderHeader의 API 주소 다름 주의!)
  return (
    <div className={style.content_container}>
      <CommonContentSearch />
      {/* {additionalContent && <div>{additionalContent}</div>} */}
      {/* <CardList /> */}
    </div>
  );
}

export default CommonContent;
