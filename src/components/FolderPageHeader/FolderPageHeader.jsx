import "./FolderPageHeader.css";
import LinkAddCTA from "../styled/LinkAddCTA";

export default function FolderPageHeader() {
  return (
    <div className="folder-page-header">
      <div className="link-adder">
        <img src="images/link.svg" alt="link" />
        <input type="text" placeholder="링크를 추가해 보세요" />
        <LinkAddCTA>추가하기</LinkAddCTA>
      </div>
    </div>
  );
}
