const getCoustomDate = (createDate: Date): string => {
  const coustomDate = {
    year: createDate.getFullYear(),
    month: createDate.getMonth() + 1,
    date: createDate.getDate()
  };
  return `${coustomDate.year}. ${coustomDate.month}. ${coustomDate.date}`;
};

export default getCoustomDate;
