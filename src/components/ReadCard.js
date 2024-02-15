import Card from "./Card/Card";
import CardImage from "./CardImage/CardImage";
import CardContent from "./CardContent/CardContent";

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
