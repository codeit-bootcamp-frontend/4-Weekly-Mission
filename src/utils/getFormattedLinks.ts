import { FormatLink } from "@/constants/index.types";

function formatLinkData(link: FormatLink) {
  return {
    id: link.id,
    imageSource: link.image_source,
    createdAt: link.created_at,
    description: link.description,
    title: link.title,
    url: link.url,
  };
}

export default function getFormattedLinks(links: FormatLink[]) {
  return (
    links &&
    links.map((link: FormatLink) => {
      return formatLinkData(link);
    })
  );
}
