export interface LinkType {
  id: number;
  created_at: string;
  description: string;
  image_source: string;
  title: string;
  url: string;
}

export interface FoldersType {
  folder: {
    count: number;
    id: number;
    links: LinkType[];
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
  };
}
