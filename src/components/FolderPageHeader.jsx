import "./styles/FolderPageHeader.css";
import CTA from "./CTA";
import styled from "styled-components";

const LinkAddCTA = styled(CTA)`
  width: 80px;
  padding: 10px 16px;
  font-size: 14px;
`;

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
