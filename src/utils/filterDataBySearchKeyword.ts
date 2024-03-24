import { Link, UserLinksData } from 'interfaces/dataInterface';

type Keyword = string | null;

const filterDataBySearchKeyword = (data: (UserLinksData | Link)[], keyword: Keyword) => {
  if (!keyword) return data;

  const lowerCaseKeyword = keyword.toLowerCase();

  return data.filter((item) => {
    return (
      item?.url?.toLowerCase().includes(lowerCaseKeyword) ||
      item?.title?.toLowerCase().includes(lowerCaseKeyword) ||
      item?.description?.toLowerCase().includes(lowerCaseKeyword)
    );
  });
};

export default filterDataBySearchKeyword;
