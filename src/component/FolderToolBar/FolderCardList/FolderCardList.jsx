import { useState } from "react";
import { elapsedTime, formatCreatedAt } from "../../../utils/utils";
import ModalDelete from "../../Modal/ModalDelete";
import ModalAdd from "../../Modal/ModalAdd";
import kebab from "../../../images/kebab.svg";
import "./FolderCardList.css";

const FolderCardList = ({ links }) => {
  const [popoverShows, setPopoverShows] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedLinkId, setSelectedLinkId] = useState(null);

  const togglePopover = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setPopoverShows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDeleteClick = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedLinkId(id);
    setModalType("delete");
    setIsModalOpen(true);
  };

  const handleAddFolderClick = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedLinkId(id);
    setModalType("add");
    setIsModalOpen(true);
  };

  return (
    <div className="card-list">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="card-container">
            <div
              className="cardImg"
              style={{ backgroundImage: `url(${link.image_source})` }}
            ></div>
            <div className="card-content">
              <span className="elapsed-time">
                {elapsedTime(link.created_at)}
              </span>
              <p className="description">{link.description}</p>
              <span className="createdAt">
                {formatCreatedAt(link.created_at)}
              </span>
            </div>
            <button
              className="edit-button"
              onClick={(e) => togglePopover(link.id, e)}
            >
              <img src={kebab} alt="Edit" />
              {popoverShows[link.id] && (
                <div className="popover">
                  <ul className="popover-list">
                    <li onClick={(e) => handleDeleteClick(link.id, e)}>
                      삭제하기
                    </li>
                    <li onClick={(e) => handleAddFolderClick(link.id, e)}>
                      폴더에 추가
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        </a>
      ))}

      {isModalOpen && modalType === "delete" && (
        <ModalDelete setIsModalOpen={setIsModalOpen} linkId={selectedLinkId} />
      )}
      {isModalOpen && modalType === "add" && (
        <ModalAdd setIsModalOpen={setIsModalOpen} linkId={selectedLinkId} />
      )}
    </div>
  );
};

export default FolderCardList;
