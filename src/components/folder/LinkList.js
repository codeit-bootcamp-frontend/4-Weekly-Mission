import { formatDate, getDaysAgo } from "../../util/date-calculator";
import card from "../../images/linkbrary-card.png";
import star from "../../images/star.png";
import kebab from "../../images/kebab.png";
import { useEffect, useState } from "react";
import AddModal from "../modals/AddModal";
import DeleteModal from "../modals/DeleteModal";

function LinkListItem({ folderListData, linkData }) {
  const [kebabOn, setKebabOn] = useState(false);
  const [addModalOn, setAddModalOn] = useState(false);
  const [deleteModalOn, setDeleteModalOn] = useState(false);
  const url = linkData.url;
  let image = linkData.image_source || card;

  const handleKebab = (e, isIn) => {
    e.preventDefault();
    setKebabOn(isIn);
  };

  function handleAddModalOn() {
    setAddModalOn(true);
  }
  function handleAddModalOff() {
    setAddModalOn(false);
  }
  function handleDeleteModalOn() {
    setDeleteModalOn(true);
  }
  function handleDeleteModalOff() {
    setDeleteModalOn(false);
  }

  function kebabMenuBlur(e) {
    const kebabMenuButtons = document.querySelectorAll(".kebab-menu");

    if (
      e.relatedTarget !== kebabMenuButtons[0] &&
      e.relatedTarget !== kebabMenuButtons[1]
    ) {
      handleKebab(e, false);
    }
  }
  return (
    <>
      <a
        href={url}
        className="card flex flex-col"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          key={image}
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
        >
          <button className="star">
            <img src={star} />
          </button>
        </div>
        <div className="card-content">
          <div>
            <button
              onClick={(e) => {
                handleKebab(e, true);
              }}
              onBlur={(e) => {
                kebabMenuBlur(e);
              }}
              className="kebab"
            >
              <img src={kebab} />
            </button>
            {kebabOn && (
              <div className="kebab-menus">
                <button
                  onClick={(e) => {
                    handleKebab(e, false);
                    handleDeleteModalOn();
                  }}
                  className="kebab-menu"
                >
                  삭제하기
                </button>
                <button
                  onClick={(e) => {
                    handleKebab(e, false);
                    handleAddModalOn();
                  }}
                  className="kebab-menu"
                >
                  폴더에 추가
                </button>
              </div>
            )}
          </div>

          <p>{getDaysAgo(linkData.created_at)}</p>
          <h2>{linkData.title}</h2>
          <p>{formatDate(linkData.created_at)}</p>
        </div>
      </a>
      {addModalOn && (
        <AddModal
          purpose="폴더에 추가"
          url={url}
          handleModalOff={handleAddModalOff}
          folderListData={folderListData}
        />
      )}
      {deleteModalOn && (
        <DeleteModal
          purpose="링크 삭제"
          link={linkData.url}
          handleModalOff={handleDeleteModalOff}
        />
      )}
    </>
  );
}

function LinkList({ linksData, folderListData }) {
  return (
    <div className="link-list">
      {linksData.map((data) => {
        return (
          <LinkListItem
            folderListData={folderListData}
            key={data.id}
            linkData={data}
          />
        );
      })}
    </div>
  );
}

export default LinkList;
