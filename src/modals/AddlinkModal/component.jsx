import ModalWrapper from "../ModalWrapper";
import ModalCTA from "../../components/styled/ModalCTA";
import { fetchFolders } from "../../api";
import { useState, useEffect } from "react";
import "./style.css";

export default function AddlinkModal({ onClose, data }) {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  async function getFolders() {
    try {
      const response = await fetchFolders();
      setFolders(response);
    } catch (e) {
      alert(e);
      return;
    }
  }
  useEffect(() => {
    getFolders();
  }, []);
  return (
    <>
      <ModalWrapper onClose={onClose} title="폴더에 추가" info={data.link}>
        <div className="add-to-folder-list">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className={`add-to-folder ${
                selectedFolder === folder.id ? "selected-to-add-to" : ""
              }`}
              onClick={() => {
                setSelectedFolder(folder.id);
              }}
            >
              <div className="add-to-folder-info">
                <span className="add-to-folder-name">{folder.name}</span>
                <span className="add-to-folder-num-links">{`${folder.link.count}개 링크`}</span>
              </div>
              <img
                src="images/checkmark.svg"
                alt="check"
                className="checkmark"
              />
            </div>
          ))}
        </div>
        <ModalCTA>추가하기</ModalCTA>
      </ModalWrapper>
    </>
  );
}
