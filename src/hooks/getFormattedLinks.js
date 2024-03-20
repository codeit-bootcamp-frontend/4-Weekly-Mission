function formatLinkData(link) {
  return {
    id: link.id,
    imageSource: link.image_source,
    createdAt: link.created_at,
    description: link.description,
    title: link.title,
    url: link.url,
  };
}

export default function getFormattedLinks(strangeData) {
  return strangeData.map((link) => {
    return formatLinkData(link);
  });
}
