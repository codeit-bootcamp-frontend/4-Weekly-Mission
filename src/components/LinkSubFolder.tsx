import "./LinkSubFolder.css";
import { useEffect, useState } from "react";
import {
  Button,
  SubFolderBtn,
  SubFolderBtnList,
  SubFolderUtilList,
} from "./LinkSubFolder.Styles";

interface SubFolderListProp {
  subFolderData: any;
  handleCurrentFolderChange: any;
}

function SubFoldersList({
  subFolderData,
  handleCurrentFolderChange,
}: SubFolderListProp) {
  const [subFolderList, setSubFolderList] = useState<any>([]);
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
        className="link-sub-folder-list"
      >
        전체
      </SubFolderBtn>
      {subFolderList.map((item: any) => (
        <SubFolderBtn
          key={item.id}
          $state={selectedBtn === item.id}
          className="link-sub-folder-list"
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
          key={item.btnName}
          type="button"
          className="sub-folder-utility"
          onClick={() => item.kebabHandle(item.type, item.data)}
        >
          {item.btnName}
          <img src={item.imgUrl} alt={item.imgAlt} />
        </Button>
      ))}
    </SubFolderUtilList>
  );
}

export { HandleCurrentSubFolder, SubFoldersList };
