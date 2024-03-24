export default interface Info {
  id: number | null;
  name: string;
  email: string;
  profileImageSource: string;
  data: [
    {
      id: number;
      created_at: string;
      name: string;
      image_source: string;
      email: string;
      auth_id: string;
    }
  ];
}
