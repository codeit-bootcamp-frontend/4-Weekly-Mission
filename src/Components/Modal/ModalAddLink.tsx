import React, { useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import { useFolder } from "../../Hooks/useFolder";
import { getFolderWithLinkCount, Folder } from "../../API/FolderPageApi";

interface ModalAddLinkProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const ModalAddLink = ({ isOpen, onClose, url }: ModalAddLinkProps) => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const { folder } = useFolder();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foldersData = await getFolderWithLinkCount();
        setFolders(foldersData);
      } catch (error) {
        console.error("폴더 정보를 불러오는 데 실패했습니다.");
      }
    };

    fetchData();
  }, []);

  const addLink = (
    <>
      <h2 className="modalTitle">폴더에 추가</h2>
      <div className="menuLists">
        {folders.map((eachFolder) => (
          <div className="menuList">
            {eachFolder.name}
            <p>{eachFolder.count}개 링크</p>
          </div>
        ))}
      </div>
      <button className="modelAddBtn">추가하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={addLink} />
  );
};

export default ModalAddLink;
