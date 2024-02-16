const BASE_API = "https://bootcamp-api.codeit.kr/api";

export const getSampleData = async () => {
  const userData = { email: null, image: null };
  try {
    const response = await fetch(`${BASE_API}/sample/user`);
    const result = await response.json();
    userData.email = result.email;
    userData.image = result.profileImageSource;
    return userData;
  } catch (error) {
    console.log(error);
    return (userData = null);
  }
};

export const getSampleFolderData = async () => {
  const folderData = {
    profileImage: null,
    profileName: null,
    folderName: null,
    cardLinks: null,
  };
  try {
    const response = await fetch(`${BASE_API}/sample/folder`);
    const result = await response.json();
    folderData.profileImage = result.folder.owner.profileImageSource;
    folderData.profileName = result.folder.owner.name;
    folderData.folderName = result.folder.name;
    folderData.cardLinks = result.folder.links;
    return folderData;
  } catch (error) {
    console.log(error);
    return (folderData = null);
  }
};
