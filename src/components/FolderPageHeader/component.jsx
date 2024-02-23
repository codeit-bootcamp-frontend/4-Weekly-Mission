import "./style.css";
import LinkAddCTA from "../styled/LinkAddCTA";
import { AddlinkModal } from "../../modals";
import { useState } from "react";

export default function FolderPageHeader() {
  const [newLink, setNewLink] = useState("");
  const [isAddlinkModalOpen, setIsAddlinkModalOpen] = useState(false);
  return (
    <div className="folder-page-header">
      <div className="link-adder">
        <img src="images/link.svg" alt="link" />
        <input
          type="text"
          value={newLink}
          placeholder="링크를 추가해 보세요"
          onChange={(e) => setNewLink(e.target.value)}
        />
        <LinkAddCTA
          onClick={() => {
            setIsAddlinkModalOpen(true);
          }}
        >
          추가하기
        </LinkAddCTA>
        {isAddlinkModalOpen && (
          <AddlinkModal
            onClose={() => setIsAddlinkModalOpen(false)}
            data={{ title: "", link: newLink }}
          />
        )}
      </div>
    </div>
  );
}
