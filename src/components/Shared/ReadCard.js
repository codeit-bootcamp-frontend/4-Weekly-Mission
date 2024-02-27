import Card from "../common/Card/Card";
import CardImage from "../common/CardImage/CardImage";
import CardContent from "../common/CardContent/CardContent";

function ReadCard({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card>
        <CardImage imageSource={imageSource} alt={alt} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
        />
      </Card>
    </a>
  );
}
export default ReadCard;
