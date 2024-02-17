import { useEffect, useState } from "react";
import { getFolderData } from "../../apis/api";
import FolderOwner from "../../component/FolderOwner/FolderOwner";
import LinkItems from "../../component/LinkItems/LinkItems";

const SharedPage = () => {
  const [folderData, setFolderData] = useState(null);

  const getData = async () => {
    try {
      const data = await getFolderData();
      setFolderData(data.folder);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {folderData ? (
        <>
          <FolderOwner name={folderData?.name} owner={folderData?.owner} />
          <LinkItems links={folderData?.links} />
        </>
      ) : (
        <p className="loadFail">저장된 링크가 없습니다.</p>
      )}
    </>
  );
};

export default SharedPage;
