// userTitle Type
export type UserLinks = {
  createdAt: string;
  description: string;
  id: number;
  imageSource?: string;
  title: string;
  url: string;
};

type UserOwner = {
  id: number;
  name: string;
  profileImageSource: string;
};

export type User = {
  count: number;
  id: number;
  name: string;
  links: UserLinks[];
  owner: UserOwner;
};

export type Profile = {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
};
