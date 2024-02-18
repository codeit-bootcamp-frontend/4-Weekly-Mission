import { getCategory } from "data-access/getCategory";
import "./Classification.css";
import { Button } from "StyledComponents/Buttons";
import { useEffect, useState } from "react";

export function Classification() {
  const [data, setData] = useState();

  const handleLoadCategory = async () => {
    const { data } = await getCategory();
    setData(data);
  };

  useEffect(() => {
    handleLoadCategory();
  }, []);

  return (
    <div className="classification">
      <div className="classification-buttons">
        {data?.map((category) => (
          <Button key={category?.id}>{category.name}</Button>
        ))}
      </div>
      <button className="add-folder-button">폴더 추가 +</button>
    </div>
  );
}
