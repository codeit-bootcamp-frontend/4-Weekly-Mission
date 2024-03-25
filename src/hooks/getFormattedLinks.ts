import { FormetLink } from "@/constants/index.types";

function formatLinkData(link: FormetLink) {
  return {
    id: link.id,
    imageSource: link.image_source,
    createdAt: link.created_at,
    description: link.description,
    title: link.title,
    url: link.url,
  };
}

export default function getFormattedLinks(links: FormetLink[]) {
  return (
    links &&
    links.map((link: FormetLink) => {
      return formatLinkData(link);
    })
  );
}
