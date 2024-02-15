const API_ADDRESS = "https://bootcamp-api.codeit.kr/api";

export const getProfile = async () => {
  const userData = { email: null, image: null };
  const response = await fetch(`${API_ADDRESS}/sample/user`);
  const result = await response.json();
  userData.email = result.email;
  userData.image = result.profileImageSource;

  if (!response.ok) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  return userData;
};

export const getFolder = async () => {
  const folderData = {
    userProfileImage: null,
    userName: null,
    folderName: null,
    cardLinks: null,
  };
  const response = await fetch(`${API_ADDRESS}/sample/folder`);
  const result = await response.json();
  folderData.userProfileImage = result.folder.owner.profileImageSource;
  folderData.userName = result.folder.owner.name;
  folderData.folderName = result.folder.name;
  folderData.cardLinks = result.folder.links;

  if (!response.ok) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  return folderData;
};
