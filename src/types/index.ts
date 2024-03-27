export interface Link {
  id: string;
  url: string;
  title: string;
  description: string;
  createdAt: string;
  imageSource: string;
  created_at: string;
  image_source: string;
  [key: string]: string | number;
}

export interface Folder {
  id: number;
  name: string;
  link: {
    count: number;
  };
}
