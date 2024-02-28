import processLinkData from "./processLinkData";

const processFolderData = (folder) => {
  if (!folder) {
    return [];
  }
  const { name, owner, links } = folder;

  return {
    profileImage: owner.profileImageSource,
    ownerName: owner.name,
    folderName: name,
    //links 객체 배열을 순회하면서 객체 요소 각각의 시간 바꿔준 후 새로운 배열로!
    links: links.map(processLinkData) ?? [], //null이면 빈 배열 반환
  };
};

export default processFolderData;
