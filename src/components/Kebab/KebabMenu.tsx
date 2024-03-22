import { useState } from "react";
import * as S from "./KebabMenu.style";

// Types
import { LinkCardFunctionObjectType } from "src/@types/ModalFunctionDataTypes";
interface KebabMenuPropType {
  items: LinkCardFunctionObjectType[];
  data: string;
}

/**
 *
 * @param {KebabMenuPropType} items 케밥 메뉴의 이름, 동작, 동작 타입 등의 다양한 정보가 담긴 객체입니다.
 * @param {string} data 모달 상단에 현재 선택된 링크나 폴더 등을 받아 caption으로 추가할 데이터입니다.
 * @returns 케밥 메뉴 종합 데이터를 받아 케밥 클릭시 소메뉴를 표시하고, 각 메뉴에 따른 기능을 전달하는 컴포넌트입니다.
 */
export default function KebabMenu({ items, data }: KebabMenuPropType) {
  const [kebabMenuPop, setKebabMenuPop] = useState(false);

  const handleKebabToggle = () => {
    setKebabMenuPop(!kebabMenuPop);
  };

  return (
    <S.KebabMenuOriginPosition>
      <S.KebabToggleButton type="button" onClick={handleKebabToggle}>
        <img src="kebab.svg" alt="kebabButton" />
      </S.KebabToggleButton>
      {kebabMenuPop && (
        <>
          <S.KebabDiv>
            {items.map((item) => (
              <S.KebabMenuButton
                className="lb-body2-regular"
                key={item.buttonName}
                onClick={() =>
                  item.modalHandle(item.type, [data, ...item.data])
                }
              >
                {item.buttonName}
              </S.KebabMenuButton>
            ))}
          </S.KebabDiv>
          <S.KebabCancel onClick={handleKebabToggle} />
        </>
      )}
    </S.KebabMenuOriginPosition>
  );
}
