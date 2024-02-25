import { useState, useEffect } from "react";
import api from "../utils/api";

const useGetButttonList = () => {
  const [buttonsId, setButtonsId] = useState([]);
  const [buttonsTitle, setButtonsTitle] = useState([]);
  //setter에 들어가는게 button의 아이디, 내용(타이틀)들이라 따로 이름을 짓기가.. 
  //state랑 똑같이 지어야 할 것 같아서 우선 냅두겠습니다! 탁월한 변수명이 있다면 추천해주세요! 
  //버튼의 title은 전체일 경우와 api로 받아올 경우가 있고요, 전체일 경우 endpoint가 정해져 있어서
  //전체가 아닐 경우와 차이를 두기 위해 id를 null로 설정했습니다.

  //즉 전체버튼은 고정된 버튼 타이틀이고 이후 버튼 타이틀은 api로 받아옵니다.
  //전체 버튼을 누르면 고정된 endpoint에서 api를 받아오고
  //이후 버튼들을 누르면 각 버튼에 해당하는 endpoint에서 api를 받아옵니다. 
  // 전체 버튼과 이후 버튼들을 분리해서 관리하는 것이 좋을까요? 
  // 어차피 유지보수를 할 때도 전체 버튼이 없어질 경우 배열의 맨 앞 요소들만 삭제하면 되기에 
  // 우선 같이 적었습니다..! 따로 훅을 만들고 컴포넌트로 불러오는 것이 비효율적일 것 같아서요..! 
  
  const fetchData = async () => {
    try {
      const result = await api("users/11/folders");
      setButtonsId([null, ...result.data.map((item) => item.id)]);
      setButtonsTitle(["전체", ...result.data.map((item) => item.name)]);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { buttonsId, buttonsTitle };
};

export default useGetButttonList;
