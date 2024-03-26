import { CategoryDataType } from "typeStore";
import * as S from "./CategoryBar.styled";

interface CategoryProps {
  categoryList: CategoryDataType[];
  onClick: (folderName: string) => void;
  dispatch: any;
}

const CategoryBar: React.FC<CategoryProps> = ({
  categoryList,
  onClick,
  dispatch,
}) => {
  return (
    <S.CategoryBarBlock>
      <S.CategoryList>
        <li
          onClick={() => {
            onClick("전체");
          }}
        >
          <S.CategoryBtn
            to="all"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            전체
          </S.CategoryBtn>
        </li>
        {categoryList
          ? categoryList.map((category: CategoryDataType) => (
              <li
                key={category.id}
                onClick={() => {
                  onClick(category.name);
                }}
              >
                <S.CategoryBtn
                  to={`${category.id}`}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  {category.name}
                </S.CategoryBtn>
              </li>
            ))
          : null}
      </S.CategoryList>
      <S.AddFolderBtn
        onClick={() => {
          dispatch({
            state: true,
            type: "Edit",
            title: "폴더 추가",
            buttonText: "추가하기",
            placeHolder: "폴더 이름 입력",
          });
        }}
      >
        폴더 추가 +
      </S.AddFolderBtn>
    </S.CategoryBarBlock>
  );
};

export default CategoryBar;
