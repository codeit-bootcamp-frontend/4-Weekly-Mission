import Card from "./Card/Card";

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
      <Card
        imageSource={imageSource}
        alt={alt}
        elapsedTime={elapsedTime}
        description={description}
        createdAt={createdAt}
      />
    </a>
  );
}

export default ReadCard;
