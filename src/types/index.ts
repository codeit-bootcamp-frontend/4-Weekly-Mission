//네이밍을 어떻게 해야할까 앞에 I를 붙여주는 건 옛날방식이라고 들었다.
export interface Link {
  id: string;
  url: string;
  title: string;
  description: string;
  createdAt: string;
  imageSource: string;
  created_at: string;
  image_source: string;
}

// const link: Link = {
//   createdAt: "2023-04-15T08:11:20Z",
//   description: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요",
//   id: "9",
//   imageSource:
//     "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
//   title: "네이버",
//   url: "https://www.naver.com/",
// };

export interface FolderInfo {
  owner: {
    profileImageSource: string;
    name: string;
  };
  name: string;
  links: Link[];
}

export interface Folder {
  id: string;
  name: string;
  link: {
    count: number;
  };
}

export interface User {
  email: string;
  image_source: string;
}
