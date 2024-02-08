const BASEURL = 'https://bootcamp-api.codeit.kr/api';

export const userDataAPI = async () => {
  const APIData = { email: null, image: null };
  const response = await fetch(`${BASEURL}/sample/user`);
  if (response.ok) {
    const result = await response.json();
    APIData.email = result.email;
    APIData.image = result.profileImageSource;
    return APIData;
  }
  return null;
};

export const folderDataAPI = async () => {
  const APIData = {
    userName: null,
    userImage: null,
    name: null,
    cardData: null,
  };
  const response = await fetch(`${BASEURL}/sample/folder`);
  if (response.ok) {
    const { folder } = await response.json();
    APIData.userName = folder.owner.name;
    APIData.userImage = folder.owner.profileImageSource;
    APIData.name = folder.name;
    APIData.cardData = folder.links;
    return APIData;
  }
  throw new Error('데이터 불러오기 실패');
};
