import timeSince from "./Utils";

// CardHeader -> ~ago 표시되는 부분(card.createdAt 활용) + Utils.js의 timeSince 활용
function CardHeader({ createdAt }) {
  return <span>{timeSince(createdAt)}</span>;
}

export default CardHeader;
