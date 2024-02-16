const mapFolderData = (folder) => {
  if (!folder) return [];
  const { name, owner, links } = folder;

  const mapLinks = (link) => {
    const { id, createdAt, url, imageSource, title, description } = link;

    const now = new Date();
    const createdAtDate = new Date(createdAt);
    const timePassed = now - createdAtDate;

    return {
      id,
      url,
      imageSource,
      alt: `${title || "untitled"}`,
      // elapsedTime: timePassed,
      description,
      createdAt,
    };
  };

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinks) ?? [],
  };
};

export default mapFolderData;
