const API_URL = "https://bootcamp-api.codeit.kr/api/";

// api/sample/user
// const user = {
//   id: 1,
//   name: "코드잇",
//   email: "codeit@codeit.com",
//   profileImageSource: "https://codeit-front.s3.ap-northeast-2.amazonaws.com/images/default_profile.png",
// };
export async function getUserInfo() {
  const url = new URL("sample/user", API_URL);

  try {
    const response = await fetch(url);
    const result = await response.json();
    const errorMessage = result.error;

    if (!response.ok) {
      console.error("Response falied: ", errorMessage);
      return null;
    }

    return result;
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}

// api/sample/folder
// const folder = {
//   folder: {
//     id: 1,
//     name: "⭐️ 즐겨찾기",
//     owner: {
//       id: 2,
//       name: "개발자",
//       profileImageSource: "https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png",
//     },
//     links: [
//       {
//         id: 1,
//         createdAt: "2023-03-12T14:24:08Z",
//         url: "https://www.codeit.kr",
//         title: "코드잇 | 코딩, 쉬워질 때도 됐다",
//         description: "월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!",
//         imageSource: "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
//       },
//       ...,
//       {
//         id: N,
//         createdAt: "2023-03-12T14:24:08Z",
//         url: "https://www.codeit.kr",
//         title: "코드잇 | 코딩, 쉬워질 때도 됐다",
//         description: "월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!",
//         imageSource: "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
//       },
//     ],
//     count: N,
//   },
// };
export async function getFolderInfo() {
  const url = new URL("sample/folder", API_URL);

  try {
    const response = await fetch(url);
    const result = await response.json();
    const errorMessage = result.error.message;

    if (!response.ok) {
      console.error("Response falied: ", errorMessage);
      return null;
    }

    return result;
  } catch (error) {
    console.error("Fetch error: ", error.message);
  }
}
