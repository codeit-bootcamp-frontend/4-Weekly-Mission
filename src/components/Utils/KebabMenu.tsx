import { useState } from "react";
import * as S from "./KebabMenu.style";

export default function KebabMenu({ items, data = false }: any) {
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
            {items.map((item: any) => (
              <S.KebabMenuButton
                key={item.btnName}
                onClick={() =>
                  item.kebabHandle(item.type, [data, ...item.data])
                }
              >
                {item.btnName}
              </S.KebabMenuButton>
            ))}
          </S.KebabDiv>
          <S.KebabCancel onClick={handleKebabToggle} />
        </>
      )}
    </S.KebabMenuOriginPosition>
  );
}
