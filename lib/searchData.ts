interface LinksData {
  url: string | null;
  title: string | null;
  description: string | null;
}

export function filterByKeyword(links, keyword: string) {
  const lowered = keyword.toLowerCase();

  const filteredLinks = links.filter(({ url, title, description }: LinksData) => 
    url?.toLowerCase().includes(lowered) || 
    title?.toLowerCase().includes(lowered) || 
    description?.toLowerCase().includes(lowered)
  );

  return filteredLinks
}