import React, { useEffect, useState } from "react";
import { getFolders } from "../../api";
import "./index.scss";
import addLink from "../../image/link.svg";
import AddToFolder from "../Modal/AddToFolder";

const LinkForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [link, setLink] = useState("");
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await getFolders();
        setFolders(response.data);
      } catch (error) {
        console.error("폴더 데이터 불러오기 실패: ", error);
      }
    };
    fetchFolders();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <div className="link-form-box">
      <form className="link-form-wrapper">
        <img src={addLink} alt="add link" />
        <input
          className="link-input"
          type="text"
          placeholder="링크를 추가해 보세요"
          value={link}
          onChange={handleLinkChange}
        />
        <button type="button" className="add-link-button" onClick={openModal}>
          추가하기
        </button>
      </form>
      <AddToFolder
        isOpen={showModal}
        onClose={closeModal}
        link={link}
        categoryList={folders}
      />
    </div>
  );
};

export default LinkForm;
