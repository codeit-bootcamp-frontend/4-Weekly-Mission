import { FormetLinkProps } from "@/constants/index.types";

function formatLinkData(link: FormetLinkProps) {
  return {
    id: link.id,
    imageSource: link.image_source,
    createdAt: link.created_at,
    description: link.description,
    title: link.title,
    url: link.url,
  };
}

export default function getFormattedLinks(links: FormetLinkProps[]) {
  return links.map((link: FormetLinkProps) => {
    return formatLinkData(link);
  });
}
