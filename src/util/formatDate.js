export function formatData(date) {
  const createdAt = new Date(date);

  let createdYear = createdAt.getFullYear();
  let createdMonth = createdAt.getMonth() + 1;
  let createdMonthDate = createdAt.getDate();

  const createdADate = `${createdYear}.${createdMonth}.${createdMonthDate}`;

  return createdADate;
}
