export interface UserProps {
  id: number;
  email: string;
  image_source: string;
}

export type UseUserProfile = () => UserProps;
