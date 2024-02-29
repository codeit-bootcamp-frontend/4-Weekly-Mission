export const cardLinkCount = (folders, links) => {
  const linkCounts = Array(folders.length + 1).fill(0);
  linkCounts[0] = links.length;
  for (let link of links) {
    for (let folderIndex = 0; folderIndex < folders.length; folderIndex++) {
      if (link['folder_id'] === folders[folderIndex]) {
        linkCounts[folderIndex + 1] += 1;
      }
    }
  }

  return linkCounts;
};
