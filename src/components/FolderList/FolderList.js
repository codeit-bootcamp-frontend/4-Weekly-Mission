import { useAsync } from "../../hooks/useAsync";
import { axiosInstance } from "../../utils/axiosInstance";
import Card from "../Card/Card";
import CardImage from "../CardImage/CardImage";
import CardContent from "../CardContent/CardContent";
import getElapsedTime from "../../utils/getElapsedTime";
import { format } from "date-fns";
import CardList from "../CardList/CardList";

function FolderList() {
  const getAllFolder = () => axiosInstance.get("users/1/links");
  const { loading, data } = useAsync(getAllFolder);

  if (!data) {
    return;
  }
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CardList>
          {data.data.map((element) => (
            <a
              key={element.id}
              href={element.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <CardImage
                  imageSource={element.image_source}
                  alt={`${element.title}의 이미지`}
                />
                <CardContent
                  elapsedTime={getElapsedTime(element.created_at)}
                  description={element.description}
                  createdAt={format(
                    new Date(element.created_at),
                    "yyyy. MM. dd"
                  )}
                />
              </Card>
            </a>
          ))}
        </CardList>
      )}
    </div>
  );
}

export default FolderList;
