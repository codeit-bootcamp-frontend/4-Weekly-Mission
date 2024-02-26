import { useEffect, useState } from "react";
import { getFolderData } from "../../apis/api";
import FolderOwner from "../../component/FolderOwner";
import LinkItems from "../../component/LinkItems";
import LinkSearchInput from "../../component/LinkSearchInput";
import { Container } from "./style";

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
          <Container>
            <LinkSearchInput />
            <LinkItems links={folderData?.links} />
          </Container>
        </>
      ) : (
        <p className="loadFail">저장된 링크가 없습니다.</p>
      )}
    </>
  );
};

export default SharedPage;
