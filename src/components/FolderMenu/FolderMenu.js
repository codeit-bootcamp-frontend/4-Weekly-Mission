import { useState, useEffect } from "react";
import { getData } from "../../data/getData";
import { CardListFolder } from "../CardList/CardListFolder";
import { ModalName } from "../../utils/constant";
import Modal from "../../components/Modal/Modal";
import "./FolderMenu.css";

export const FolderMenu = () => {
  const [folders, setFolders] = useState(null);
  const [folderId, setFolderId] = useState(0);
  const [folderName, setFolderName] = useState("전체");
  const [links, setLinks] = useState(null);
  const [folderUrl, setFolderUrl] = useState("");

  const handleFolderClick = (e) => {
    setFolderId(e.target.value);
    setFolderName(e.target.innerHTML);
  };

  const sex = 1;

  //Modal useState
  const [name, setName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [buttonColor, setButtonColor] = useState("");
  const [buttonName, setButtonName] = useState("");

  const handleModalClick = (type) => {
    setName(type.name);
    setOpenModal(true);
    setButtonColor(type.buttonColor);
    setButtonName(type.buttonName);
  };

  useEffect(() => {
    getData("folders")
      .then((response) => {
        const { data } = response;
        return data;
      })
      .then(setFolders);
    getData("links", folderId)
      .then((response) => {
        const { data } = response;
        return data;
      })
      .then(setLinks);
  }, [folderId]);

  return (
    <div>
      {openModal ? (
        <Modal
          name={name}
          setOpenModal={setOpenModal}
          buttonColor={buttonColor}
          buttonName={buttonName}
          folders={folders}
          folderId={folderId}
          folderName={folderName}
          folderUrl={folderUrl}
        />
      ) : null}
      <div className="FolderMenu">
        <button value={""} onClick={handleFolderClick}>
          전체
        </button>
        {folders?.map((list) => (
          <button value={list.id} key={list.id} onClick={handleFolderClick}>
            {list.name}
          </button>
        ))}
        <button
          className="addFolder"
          onClick={() => handleModalClick(ModalName.add)}
        >
          폴더 추가 +
        </button>
      </div>
      <div className="FolderList">
        <div className="FolderFunction">
          <div className="FolderName">{folderName}</div>
          <div className="FolderButton">
            <button onClick={() => handleModalClick(ModalName.share)}>
              공유
            </button>
            <button onClick={() => handleModalClick(ModalName.change)}>
              이름 변경
            </button>
            <button onClick={() => handleModalClick(ModalName.delete)}>
              삭제
            </button>
          </div>
        </div>
        <div className="FolderLink">
          {links && links.length >= 1 ? (
            links?.map((link) => (
              <CardListFolder
                key={link.id}
                {...link}
                setName={setName}
                setOpenModal={setOpenModal}
                setButtonColor={setButtonColor}
                setButtonName={setButtonName}
                setFolderUrl={setFolderUrl}
              />
            ))
          ) : (
            <p className="noLink">저장된 링크가 없습니다</p>
          )}
        </div>
      </div>
    </div>
  );
};
