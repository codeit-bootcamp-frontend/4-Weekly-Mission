import { useState, useEffect } from "react";
import api from "../utils/api";

const useGetCardsInFolder = (clickedButtonId) => {
  const [cardDetail, setCardDetail] = useState(null);

  //클릭된 버튼이 "전체"가 아니면 쿼리스트링 / "전체"이면 뒤에 아무것도 붙이지 x
  let query = `users/11/links${
    clickedButtonId ? "?folderId=" + clickedButtonId : ""
  }`;

  const fetchData = async () => {
    try {
      const result = await api(query);
      //data가 존재하면 ? data 반환 : null 반환
      //cardetail이 null이면 부모에서 특정 ui 띄워주어야 함
      let currentObj = result["data"].length > 0 ? result["data"] : null;
      currentObj = currentObj?.map((item) => {
        const { created_at, image_source, ...rest } = item;
        return {
          createdAt: created_at,
          imageSource: image_source,
          ...rest,
        };
      });

      setCardDetail(currentObj);
      console.log(cardDetail);
    } catch (error) {
      setCardDetail(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [clickedButtonId]);

  return { cardDetail };
};

export default useGetCardsInFolder;
