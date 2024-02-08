const BASEURL = 'https://bootcamp-api.codeit.kr/api';

export const userDataAPI = async () => {
  const APIData = { email: null, image: null };
  const response = await fetch(`${BASEURL}/sample/user`);
  const result = await response.json();
  if (response.ok) {
    APIData.email = result.email;
    APIData.image = result.profileImageSource;
    return APIData;
  }
};

export const folderDataAPI = async () => {
  const APIData = {
    userName: null,
    userImage: null,
    name: null,
    cardData: null,
  };
  const response = await fetch(`${BASEURL}/sample/folder`);
  const { folder } = await response.json();
  if (response.ok) {
    APIData.userName = folder.owner.name;
    APIData.userImage = folder.owner.profileImageSource;
    APIData.name = folder.name;
    APIData.cardData = folder.links;
    return APIData;
  }
};
