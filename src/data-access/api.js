const BASEURL = "https://bootcamp-api.codeit.kr/api/";

export async function GetProfile() {
  const response = await fetch(`${BASEURL}users/1`);
  const result = await response.json();
  //"{\"id\":1,\"name\":\"코드잇\",\"email\":\"codeit@codeit.com\",\"profileImageSource\":\"https://codeit-front.s3.ap-northeast-2.amazonaws.com/images/default_profile.png\"}"
  //{"data":[{"id":1,"created_at":"2023-06-04T13:03:01+00:00","name":"코드잇","image_source":"https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png","email":"codeit@codeit.com","auth_id":"b9d4649a-8d92-4776-8f69-80abe2786721"}]}
  if (!response.ok) {
    throw new Error("사용자 정보를 불러오는데 실패했습니다");
  }
  return result;
}

export async function GetFolder() {
  const response = await fetch(`${BASEURL}sample/folder`);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  return result;
}

// {"folder":{"id":1,"name":"⭐️ 즐겨찾기",
// "owner":{"id":2,"name":"개발자",
// "profileImageSource":"https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png"},
// "links":[{"id":1,"createdAt":"2023-03-12T14:24:08Z","url":"https://www.codeit.kr",
// "title":"코드잇 | 코딩, 쉬워질 때도 됐다","description":"월 2만원대로 Python, JavaScript,
// HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!",
// "imageSource":"https://codeit-frontend.codeit.com/static/images/brand/og_tag.png"},
// {"id":2,"createdAt":"2022-12-23T09:44:10Z","url":"https://ko.reactjs.org/",
// "title":"React – 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리",
// "description":"A JavaScript library for building user interfaces",
// "imageSource":"https://reactjs.org/logo-og.png"},
// {"id":3,"createdAt":"2023-01-12T22:27:22Z","url":"https://nextjs.org",
// "title":"Next.js by Vercel - The React Framework for the Web",
// "description":"Used by some of the world's largest companies,
// Next.js enables you to create full-stack Web applications by extending the latest React features,
// and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
// "imageSource":"https://assets.vercel.com/image/upload/front/nextjs/twitter-card.png"},
// {"id":4,"createdAt":"2023-03-21T12:51:30Z","url":"https://www.typescriptlang.org/ko/docs/",
// "title":"The starting point for learning TypeScript",
// "description":"Find TypeScript starter projects: from Angular to React or Node.js and CLIs."},
// {"id":5,"createdAt":"2023-04-17T14:24:11Z","url":"https://tanstack.com/",
// "title":"TanStack | High Quality Open-Source Software for Web Developers",
// "description":"Headless, type-safe, powerful utilities for complex workflows like Data Management,
//  Data Visualization, Charts, Tables, and UI Components.",
// "imageSource":"https://tanstack.com/build/_assets/og-FA4FELIQ.png"},
// {"id":6,"createdAt":"2022-11-12T03:24:15Z","url":"https://storybook.js.org",
// "title":"Storybook: Frontend workshop for UI development",
// "description":"Storybook is a frontend workshop for building UI components and pages in isolation.
//  Thousands of teams use it for UI development, testing, and documentation.
//  It’s open source and free.","imageSource":"https://storybook.js.org/images/social/og-home.jpg"},
// {"id":7,"createdAt":"2023-01-30T04:04:00Z","url":"https://testing-library.com/",
// "title":"Testing Library | Testing Library","description":"Simple and complete testing utilities
// that encourage good testing practices",
// "imageSource":"https://testing-library.com/img/octopus-128x128.png"},
// {"id":8,"createdAt":"2022-11-27T12:24:09Z","url":"https://instagram.com/","title":"Instagram",
// "description":"Create an account or log in to Instagram - A simple, fun & creative way to capture,
//  edit & share photos, videos & messages with friends & family.",
// "imageSource":"https://static.cdninstagram.com/rsrc.php/v3/yt/r/30PrGfR3xhB.png"},
// {"id":9,"createdAt":"2023-04-15T08:11:20Z","url":"https://www.naver.com/",
// "title":"네이버","description":"네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요",
// "imageSource":"https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"}],
// "count":9}}

export async function GetFolderList() {
  const response = await fetch(`${BASEURL}users/1/folders`);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("폴더 목록 정보를 불러오는데 실패했습니다");
  }
  return result;
}
//{"data":[{"id":14,"created_at":"2023-06-04T20:59:39.293024+00:00",
//"name":"⭐️ 즐겨찾기","user_id":1,"favorite":true,"link":{"count":0}},
//{"id":24,"created_at":"2023-06-18T13:33:09.993192+00:00","name":"신규 폴더1","user_id":1,
//"favorite":false,"link":{"count":0}},{"id":307,"created_at":"2024-01-12T15:08:12.873779+00:00",
//"name":"새로운폴더스","user_id":1,"favorite":false,"link":{"count":0}},
//{"id":433,"created_at":"2024-01-14T12:01:27.040783+00:00","name":"유담이와 아이들",
//"user_id":1,"favorite":false,"link":{"count":0}},
//{"id":441,"created_at":"2024-01-14T12:40:56.383949+00:00","name":"안 없어져","user_id":1,
//"favorite":false,"link":{"count":0}},{"id":457,"created_at":"2024-01-14T13:47:32.813674+00:00",
//"name":"또","user_id":1,"favorite":false,"link":{"count":0}},
//{"id":480,"created_at":"2024-01-15T11:03:07.802566+00:00","name":"추가","user_id":1,
//"favorite":false,"link":{"count":0}},{"id":513,"created_at":"2024-01-18T15:55:27.603912+00:00",
//"name":"string2","user_id":1,"favorite":false,"link":{"count":0}}]}

export async function GetLinks(id) {
  const response = await fetch(`${BASEURL}users/1/links?folderId=${id}`);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("링크를 불러오는데 실패했습니다");
  }
  return result;
}

export async function GetAllLinks(id) {
  const response = await fetch(`${BASEURL}users/1/links`);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("링크를 불러오는데 실패했습니다");
  }
  return result;
}

//전체
//{"data":[{"id":192,"created_at":"2023-06-30T08:07:41.588529+00:00",
//"updated_at":null,"url":"https://bootcamp-api.codeit.kr/docs","title":null,
//"description":null,"image_source":null,"folder_id":null},
//{"id":189,"created_at":"2023-06-30T06:55:56.9917+00:00","updated_at":null,
//"url":"https://www.google.com/","title":"Google","description":"Search the world's information,
//including webpages, images, videos and more. Google has many special features to help you find
//exactly what you're looking for.","image_source":null,"folder_id":null},
//{"id":188,"created_at":"2023-06-30T05:15:37.191878+00:00","updated_at":null,
//"url":"https://jasonwatmore.com/next-js-13-mongodb-user-registration-and-login-tutorial-with-example-app",
//"title":"Next.js 13 + MongoDB - User Registration and Login Tutorial with Example App | Jason
//Watmore's Blog","description":"In this tutorial we'll go through an example of how to build a
//simple user registration, login and user management (CRUD) application with Next.js and MongoDB.",
//"image_source":"https://jasonwatmore.com/_content/images/jason.jpg","folder_id":null}]}

//즐겨찾기
