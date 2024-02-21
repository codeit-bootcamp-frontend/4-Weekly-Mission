import { format } from "date-fns";
import getElapsedTime from "../../utils/getElapsedTime";
import Card from "../Card/Card";
import CardContent from "../CardContent/CardContent";
import CardImage from "../CardImage/CardImage";
import CardList from "../CardList/CardList";

function FolderCard({ folderLinks }) {
  const links = folderLinks || [];

  return (
    <CardList>
      {links.map((link) => (
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          <Card>
            <CardImage
              imageSource={link.image_source}
              alt={`${link.title}의 이미지`}
            />
            <CardContent
              elapsedTime={getElapsedTime(link.created_at)}
              description={link.description}
              createdAt={format(new Date(link.created_at), "yyyy. MM. dd")}
            />
          </Card>
        </a>
      ))}
    </CardList>
  );
}

export default FolderCard;
