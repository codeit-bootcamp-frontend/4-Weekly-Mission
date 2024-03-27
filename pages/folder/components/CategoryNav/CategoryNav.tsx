import * as S from "./CategoryNavStyled";
import { CategoryNavButtons } from "./CategoryNavButtons/CategoryNavButtons";

interface Props {
  activeCategoryName: string;
}

export function CategoryNav({ activeCategoryName }: Props) {
  return (
    <S.CategoryNavBarContainer>
      <S.ActiveCategory>{activeCategoryName}</S.ActiveCategory>
      <S.CategoryNavButtons>
        {activeCategoryName !== "전체" && (
          <CategoryNavButtons selectFolder={activeCategoryName} />
        )}
      </S.CategoryNavButtons>
    </S.CategoryNavBarContainer>
  );
}
