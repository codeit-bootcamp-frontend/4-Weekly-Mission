import { useEffect, useState } from "react";
import {
  Button,
  SubFolderBtn,
  SubFolderBtnList,
  SubFolderUtilList,
} from "./LinkSubFolder.style";
import FolderListDataType from "src/@types/FolderListDataType";

type handleCurrentFolderChangeType = (id: number, name: string) => void;

interface SubFolderListProp {
  subFolderData: FolderListDataType[];
  handleCurrentFolderChange: handleCurrentFolderChangeType;
}

function SubFoldersList({
  subFolderData,
  handleCurrentFolderChange,
}: SubFolderListProp) {
  const [subFolderList, setSubFolderList] = useState<FolderListDataType[]>([]);
  const [selectedBtn, setSelectedBtn] = useState(0);

  const handleBtnStyleChange = async (id: number, name: string) => {
    setSelectedBtn(id);
    await handleCurrentFolderChange(id, name);
  };

  useEffect(() => {
    setSubFolderList(subFolderData);
  }, [subFolderData]);

  return (
    <SubFolderBtnList>
      <SubFolderBtn
        key={0}
        $state={selectedBtn === 0}
        onClick={() => handleBtnStyleChange(0, "전체")}
      >
        전체
      </SubFolderBtn>
      {subFolderList.map((item) => (
        <SubFolderBtn
          key={item.id}
          $state={selectedBtn === item.id}
          onClick={() => handleBtnStyleChange(item.id, item.name)}
        >
          {item.name}
        </SubFolderBtn>
      ))}
    </SubFolderBtnList>
  );
}

function HandleCurrentSubFolder({ handleFunction }: any) {
  return (
    <SubFolderUtilList>
      {handleFunction.map((item: any) => (
        <Button
          key={item.buttonName}
          type="button"
          onClick={() => item.modalHandle(item.type, item.data)}
        >
          {item.buttonName}
          <img src={item.imgUrl} alt={item.imgAlt} />
        </Button>
      ))}
    </SubFolderUtilList>
  );
}

export { HandleCurrentSubFolder, SubFoldersList };
