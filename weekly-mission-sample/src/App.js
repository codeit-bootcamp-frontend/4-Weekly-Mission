import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import "./global.css";
import { FolderInfo } from "./ui/FolderInfo";
import { SearchBar } from "./ui/SearchBar";
import { CardList } from "./ui/CardList";
import { useGetFolder } from "data-access/useGetFolder";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
//밑의 코드는 컴포넌트를 구조화해서 App 컴포넌트로 만들고 있다
function App() {
  //useGetFolder 컴포넌트에서 리턴한 값을 date에 넣고 있다.
  const { data } = useGetFolder();
  //data객체에서 profileImage, ownerName, folderName, links를 구조 분해 할당으로 추출해서 선언하고 있다.
  // || {}로 data가 undefined나 null일 경우에 대비해 빈 객체를 기본값으로 설정했다.
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    //Layout 컴포넌트로 NavigationBar, main, footer를 나누고 있다.
    <Layout>
      {/* SharedPage 컴포넌트로 공유 페이지를 구현하고 있다. */}
      <SharedPage
        // folderInfo 속성을 지정하고, FolderInfo 컴포넌트로 props를 전달해서 미리보기 이미지를 구현하고 있다.
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        //searchBar 속성을 지정하고, SearchBar 컴포넌트를 사용해서 검색바를 구현하고 있다.
        searchBar={<SearchBar />}
        cardList={
          //ReadOnlyCard 컴포넌트로 props를 전달하고 있다. 그리고 리턴값을 CardList 컴포넌트로 감싸서 반환하고 있다.
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
}

export default App;
