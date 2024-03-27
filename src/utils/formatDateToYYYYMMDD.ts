const formatDateToYYYYMMDD = (createdAt: string) => {
  const dateObject = new Date(createdAt);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  return `${year}. ${month}. ${day}`;
};

export default formatDateToYYYYMMDD;
