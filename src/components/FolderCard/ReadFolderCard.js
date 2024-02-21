import { format } from "date-fns";
import getElapsedTime from "../../utils/getElapsedTime";
import CardList from "../CardList/CardList";
import ReadCard from "../ReadCard";

function ReadFolderCard({ links }) {
  return (
    <CardList>
      {links.map((link) => (
        <ReadCard
          url={link.url}
          imageSource={link.image_source}
          alt={`${link.title}의 이미지`}
          elapsedTime={getElapsedTime(link.created_at)}
          description={link.description}
          createdAt={format(new Date(link.created_at), "yyyy. MM. dd")}
        />
      ))}
    </CardList>
  );
}

export default ReadFolderCard;
