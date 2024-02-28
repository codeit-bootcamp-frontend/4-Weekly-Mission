import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSharePage from "./pages/MainSharePage/MainSharePage";
import MainFolderPage from "./pages/MainFolderPage/MainFolderPage";

import "./index.css";
import "./palette.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<MainSharePage />} />
        <Route path="/folder" element={<MainFolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* 오래 고민한 부분들 */

/* 1. 컴포넌트 설계 
(작은 것부터 큰것으로 확장하는 식으로 시작하는지, 또는 큰것부터 작은 것으로 쪼개가면서 시작하는지 궁금합니다.
  저는 후자로 접근하였습니다. 이유는, 컴포넌트를 쪼개가다보니 컴포넌트 간에 props로 어떤 것을 전달해야할지 조금씩 감이 잡혀서요!)
+ 보통 부모 컴포넌트에서 자식 컴포넌트로 Props를 전달하는 것으로 알고 있는데요, 
이때, 부모 컴포넌트에서 자식 컴포넌트에게 props를 전달할때, 
자식 컴포넌트의 렌더링에 필요한 정보들을 props로 전달하는 것이라고 저는 이해했는데, 혹시 제 생각이 맞는지 궁금합니다.)

(1) 컴포넌트들 간의 구조 설계
App
ㄴ Layout
    ㄴ NavBar
        ㄴ Profile (샘플 유저의 데이터가 존재할 경우) 또는 LoginButton (샘플 유저의 데이터가 없을 경우)
    ㄴ MainFolderPage
        ㄴ FolderInfo, SearchBar, CardInventory (페이지에 어떻게 전체 카드들을 배치할지에 대한 컨테이너 개념의 컴포넌트!_그리드 템플릿 사용)
                                  ㄴ ShareLinkCard (전체 카드 데이터를 map을 이용해 key와 함께 배열로 렌더링됨)
                                      ㄴ Card (카드 내부 데이터에 스타일을 입히기 위한 컨테이너 개념의 컴포넌트)
                                          ㄴ CardImg, CardDetail
    ㄴ Footer
*/

/* 
(2) 컴포넌트들 사이에서 전달하는 props 설계
App
ㄴ Layout (MainFolderPage를 children prop으로 가짐)
    ㄴ NavBar (profile, 즉 샘플 유저의 데이터를 props로 가짐.)
        ㄴ Profile (profile, 즉 샘플 유저의 데이터를 props로 가짐.) 
          또는 LoginButton ('로그인'이라는 텍스트를 children prop으로 가짐)
    ㄴ MainFolderPage (folderInfo, searchBar, cardInventory를 props로 가짐)
        ㄴ FolderInfo (폴더 데이터를 가공한 데이터에서의 profileImage, ownerName, folderName를 props로 가짐), 
            SearchBar, 
            CardInventory (전체 카드 데이터를 map을 이용해 key와 함께 배열로 렌더링된 ShareLinkCard를 children prop으로 가짐)
                        ㄴ ShareLinkCard (api에서 받아온 json 데이터에서 links의 id를 key로 가짐. 그리고 links의 모든 속성들을(...linkCard) props로 가짐 )
                            ㄴ Card (마우스를 올리고 내릴때 실행되는 함수를 props로, 카드 내부 데이터(CardImg, CardDetail)를 children prop으로 가짐)
                                ㄴ CardImg (폴더 데이터를 가공한 데이터에서의 links의 속성들 중에서 imageSource, alt를, 마우스가 hover 될때 변하는 isZoomedIn을 props로 가짐), 
                                  , CardDetail (폴더 데이터를 가공한 데이터에서의 links의 속성들 중에서 passedTime, description, createdAt를, 마우스가 hover 될때 변하는 isHovered를 props로 가짐)
    ㄴ Footer
*/

/* 2. 커스텀 훅 만들기
(아직 커스텀 훅이 잘 와닿지 않습니다.
커스텀 훅은 보통 언제, 어떻게 만드는 것인가요? 커스텀 훅을 만드는 데에 조건이 있는지 궁금합니다.
공통적으로 많이 실행되는 행위들을 커스텀 훅으로 만들어주는 것일까요? -> 일단은 이쪽으로 생각하여 나름 만들어보았습니다..!)

(1) useAsync : 비동기적으로 서버의 응답인 데이터를 받아올때의 로딩, 에러, 그리고 데이터의 상태를 관리하고, 
          처음 데이터를 불러오기 위해 useEffect 훅이 한번만 실행됨 (수업 내용에 등장합니다)
(2) useGetSampleFolder : axios로 서버의 /sample/folder api 주소로 get 요청 후 받은 응답인 데이터를 set. 
                    그리고 그 데이터를 요구사항에 맞게 적절히 가공(특히 시간 형식)한 후 그 데이터를 리턴
(3) useGetSampleUser : axios로 서버의 /sample/user api 주소로 get 요청 후 받은 응답인 데이터를 set하고 그 데이터를 리턴

*/
