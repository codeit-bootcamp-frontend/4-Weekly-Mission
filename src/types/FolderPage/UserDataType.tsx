interface UserInformation {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
export interface UserData {
  data: UserInformation[];
}
