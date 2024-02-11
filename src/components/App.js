import Footer from "./Footer";
import Header from "./Header";
import LinkList from "./LinkList";
import NavigationBar from "./Navbar";

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <LinkList />
      <Footer />
    </div>
  );
}

export default App;

// folder: {id: 1, name: "⭐️ 즐겨찾기", owner: {id: 2, name: "개발자",…}, links: [,…], count: 9}
// count: 9
// id: 1
// links: [,…]
// 0: 
// {id: 1, createdAt: "2023-03-12T14:24:08Z", url: "https://www.codeit.kr", title: "코드잇 | 코딩, 쉬워질 때도 됐다",…}
// createdAt: "2023-03-12T14:24:08Z"
// description: "월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!"
// id: 1
// imageSource: "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png"
// title: "코드잇 | 코딩, 쉬워질 때도 됐다"
// url: "https://www.codeit.kr"
// 1: {id: 2, createdAt: "2022-12-23T09:44:10Z", url: "https://ko.reactjs.org/",…}
// 2: {id: 3, createdAt: "2023-01-12T22:27:22Z", url: "https://nextjs.org",…}
// 3: {id: 4, createdAt: "2023-03-21T12:51:30Z", url: "https://www.typescriptlang.org/ko/docs/",…}
// 4: {id: 5, createdAt: "2023-04-17T14:24:11Z", url: "https://tanstack.com/",…}
// 5: {id: 6, createdAt: "2022-11-12T03:24:15Z", url: "https://storybook.js.org",…}
// 6: {id: 7, createdAt: "2023-01-30T04:04:00Z", url: "https://testing-library.com/",…}
// 7: {id: 8, createdAt: "2022-11-27T12:24:09Z", url: "https://instagram.com/", title: "Instagram",…}
// 8: {id: 9, createdAt: "2023-04-15T08:11:20Z", url: "https://www.naver.com/", title: "네이버",…}
// name: "⭐️ 즐겨찾기"
// owner: {id: 2, name: "개발자",…}
// id: 2
// name: "개발자"
// profileImageSource: "https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png"