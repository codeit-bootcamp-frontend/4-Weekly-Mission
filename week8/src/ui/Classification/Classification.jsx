import { getCategory } from "data-access/getCategory";
import "./Classification.css";
import { Button } from "StyledComponents/Buttons";
import { useEffect, useState } from "react";
import { CategoryNav } from "ui/CategoryNav/CategoryNav";

export function Classification() {
  const [data, setData] = useState();
  const [activeCategoryName, setActiveCategoryName] = useState("전체");

  const handleLoadCategory = async () => {
    const { data } = await getCategory();
    setData(data);
  };

  useEffect(() => {
    handleLoadCategory();
  }, []);

  const handleCategoryActive = (e) => {
    console.log(e.target.value);
    setActiveCategoryName(e.target.value);
  };

  return (
    <>
      <div className="classification">
        <div className="classification-buttons">
          <Button onClick={handleCategoryActive} key="all" value="전체">
            전체
          </Button>
          {data?.map((category) => (
            <Button
              onClick={handleCategoryActive}
              key={category?.id}
              value={category.name}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <button className="add-folder-button">폴더 추가 +</button>
      </div>
      <CategoryNav activeCategoryName={activeCategoryName} />
    </>
  );
}
