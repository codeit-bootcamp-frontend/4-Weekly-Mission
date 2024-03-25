import { useState, useEffect } from "react";
import api from "../utils/api";
const useGetCardInShared = () => {
  const [cardDetail, setCardDetail] = useState(null);

  const fetchData = async () => {
    try {
      const result = await api("sample/folder");
      //data가 존재하면 ? data 반환 : null 반환
      //cardetail이 null이면 부모에서 특정 ui 띄워주어야 함
      let currentObj =
        result["folder"]["links"].length > 0 ? result["folder"]["links"] : null;

      setCardDetail(currentObj);
      console.log(cardDetail);
    } catch (error) {
      setCardDetail(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { cardDetail };
};

export default useGetCardInShared;
