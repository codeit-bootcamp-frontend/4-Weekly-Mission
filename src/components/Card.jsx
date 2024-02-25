import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

// 카드 컴포넌트를 클릭하면 해당하는 링크로 새로운 창을 띄워서 이동하게 해주세요.
// 이미지 -> (card.imageSource 활용)
// CardHeader -> ~ago 표시되는 부분(card.createdAt 활용)
// CardContent -> 설명 표시되는 부분(card.description 활용)
// CardFooter -> 생성날짜 표시되는 부분(card.createdAt 활용)
function Card({ id, createdAt, url, title, description, imageSource }) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div onClick={handleClick}>
      <img src={imageSource} alt={title} />
      <CardHeader createdAt={createdAt} />
      <CardContent description={description} />
      <CardFooter createdAt={createdAt} />
    </div>
  );
}
export default Card;
