const API_ADDRESS = "https://bootcamp-api.codeit.kr/api";

export const getProfile = async () => {
  const response = await fetch(`${API_ADDRESS}/sample/user`);
  const result = await response.json();
  const userData = { email: result.email, image: result.profileImageSource };

  if (!response.ok) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  return userData;
};

export const getFolder = async () => {
  const response = await fetch(`${API_ADDRESS}/sample/folder`);
  const result = await response.json();
  const folderData = {
    userProfileImage: result.folder.owner.profileImageSource,
    userName: result.folder.owner.name,
    folderName: result.folder.name,
    cardLinks: result.folder.links,
  };

  if (!response.ok) {
    throw new Error("불러오는 데 실패했습니다.");
  }

  return folderData;
};
