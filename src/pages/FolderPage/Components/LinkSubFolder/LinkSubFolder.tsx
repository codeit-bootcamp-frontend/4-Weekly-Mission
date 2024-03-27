import { useEffect, useState } from "react";
import * as S from "./LinkSubFolder.style";

// Type
import FolderListDataType from "src/@types/FolderListDataType";
import { LinkFolderFunctionObjectType } from "src/@types/ModalFunctionDataTypes";
type handleCurrentFolderChangeType = (id: number, name: string) => void;

interface SubFolderListProp {
  subFolderData: FolderListDataType[];
  handleCurrentFolderChange: handleCurrentFolderChangeType;
}

/**
 * @description fetch로 받아온 subFolderData 배열에서 폴더 이름을 map으로 뽑아내어 선택 가능한 버튼으로 배치하는 컴포넌트
 * @param subFolderData 현재 사용자의 subFolder관련 데이터가 들어있는 배열
 * @param handleCurrentFolderChange 폴더 선택에 따라 해당 폴더의 고유번호로 query를 갱신하고, 새롭게 fetch를 받아올 수 있게 하는 함수.
 * @returns
 */
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
    <S.SubFolderBtnList>
      <S.SubFolderBtn
        key={0}
        $state={selectedBtn === 0}
        onClick={() => handleBtnStyleChange(0, "전체")}
      >
        전체
      </S.SubFolderBtn>
      {subFolderList.map((item) => (
        <S.SubFolderBtn
          key={item.id}
          $state={selectedBtn === item.id}
          onClick={() => handleBtnStyleChange(item.id, item.name)}
        >
          {item.name}
        </S.SubFolderBtn>
      ))}
    </S.SubFolderBtnList>
  );
}

interface HandleCurrentSubFolderPropType {
  subFolderUtils: LinkFolderFunctionObjectType[];
}

/**
 * @description 현재 폴더에 관한 동작을 수행하는 버튼들을 구현하는 컴포넌트.
 * @param subFolderUtils 버튼 관련 정보와 폴더 관련 함수가 담긴 객체가 담긴 배열.
 * @returns
 */
function HandleCurrentSubFolder({
  subFolderUtils,
}: HandleCurrentSubFolderPropType) {
  return (
    <S.SubFolderUtilList>
      {subFolderUtils.map((item) => (
        <S.Button
          className="lb-body2-semibold"
          key={item.buttonName}
          type="button"
          onClick={() => item.modalHandle(item.type, item.data)}
        >
          {item.buttonName}
          <img src={item.imgUrl} alt={item.imgAlt} />
        </S.Button>
      ))}
    </S.SubFolderUtilList>
  );
}

export { HandleCurrentSubFolder, SubFoldersList };
