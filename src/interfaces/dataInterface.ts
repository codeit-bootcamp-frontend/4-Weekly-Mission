export interface Link {
  id: number;
  title: string;
  url: string;
  description: string;
  createdAt: string; // 서버에서 내려주는 데이터가...
  created_at: string;
  imageSource: string;
  image_source: string;
}

export interface FolderInfoData {
  id: number;
  count: number;

  name: string;
  links: Link[];
  owner: {
    name: string;
    profileImageSource: string;
  };
}

export interface UserInfoData {
  auth_id: string;
  id: number;
  email: string;
  name: string;
  image_source: string;
  created_at: string;
}

export interface UserLinksData {
  id: number;
  url: string;
  title: string;
  description: string;
  image_source: string | null;
  imageSource: string;
  created_at: string;
  createdAt: string;
}

// todo
// Link랑 UserLinksData에 imageSource, image_source 이런거 추가된 부분 다시 리팩토링 필요!
// filterDataBySearchKeyword 같이 공유하려다 보니 이렇게 되었는데 문제점 파악하기!
