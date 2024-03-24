import { Link, UserLinksData } from 'interfaces/dataInterface';

type Keyword = string | null;

const filterDataBySearchKeyword = (data: (UserLinksData | Link)[], keyword: Keyword) => {
  if (!keyword) return data;

  const lowerKeyword = keyword.toLowerCase();

  return data.filter((item) => {
    if ('url' in item && 'title' in item && 'description' in item) {
      const lowerCaseUrl = item.url.toLowerCase();
      const lowerCaseTitle = item.title.toLowerCase();
      const lowerCaseDescription = item.description.toLowerCase();

      return (
        lowerCaseUrl.includes(lowerKeyword) ||
        lowerCaseTitle.includes(lowerKeyword) ||
        lowerCaseDescription.includes(lowerKeyword)
      );
    }
  });
};

export default filterDataBySearchKeyword;
