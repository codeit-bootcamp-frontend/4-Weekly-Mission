type Keyword = string | null;

export interface Link {
  id: number;
  title: string;
  url: string;
  description: string;
  createdAt: string;
  created_at: string;
  imageSource: string;
  image_source: string;
}
export interface UserLinksData {
  id: number;
  url: string;
  title: string;
  description: string;
  image_source: string | null;
  imageSource: string;
  created_at: string;
  createdAt: string;
}

const filterByKeyword = (data: (UserLinksData | Link)[], keyword: Keyword) => {
  if (!keyword) return data;

  const lowerCaseKeyword = keyword.toLowerCase();

  return data.filter(item => {
    return (
      item?.url?.toLowerCase().includes(lowerCaseKeyword) ||
      item?.title?.toLowerCase().includes(lowerCaseKeyword) ||
      item?.description?.toLowerCase().includes(lowerCaseKeyword)
    );
  });
};

export default filterByKeyword;
