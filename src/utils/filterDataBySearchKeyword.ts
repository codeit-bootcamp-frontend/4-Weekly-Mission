import { UserLinksData } from 'interfaces/dataInterface';

type Keyword = string | null;

const filterDataBySearchKeyword = (data: UserLinksData[], keyword: Keyword) => {
  if (!keyword) return data;

  return data.filter((item) => {
    return item?.url?.includes(keyword) || item?.title?.includes(keyword) || item?.description?.includes(keyword);
  });
};

export default filterDataBySearchKeyword;
