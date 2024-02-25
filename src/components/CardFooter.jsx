// CardFooter -> 생성날짜 표시되는 부분(card.createdAt 활용)
// YYYY.MM.DD
function CardFooter({ createdAt }) {
  const formatData = (data) => {
    const d = new Date(data);
    return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}`;
  };

  return (
    <div>
      <span>{formatData(createdAt)}</span>
    </div>
  );
}

export default CardFooter;
