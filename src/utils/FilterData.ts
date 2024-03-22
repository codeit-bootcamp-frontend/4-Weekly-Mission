interface Data {
  title: string | null;
  url: string | null;
  description: string | null;
}

const FilterData = <T extends Data>(cardData: T[] | null, topic: string) => {
  const filteredData = cardData?.filter(
    (data) =>
      data.url?.includes(topic) ||
      data.title?.includes(topic) ||
      data.description?.includes(topic),
  );
  if (filteredData) {
    return filteredData;
  }
  return null;
};

export default FilterData;
