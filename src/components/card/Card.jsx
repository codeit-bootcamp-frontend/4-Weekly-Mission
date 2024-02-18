import * as S from "./Card.style";
import useConvertDateFormat from "../../customHooks/useConvertDateFormat";
import calcTimeAgo from "../../utils/calcTimeAgo";

const ContentCard = ({ link }) => {
  const createdAt = link.createdAt ? link.createdAt : link.created_at;
  const imageSource = link.imageSource ? link.imageSource : link.image_source;
  return (
    <S.Container
      onClick={() => {
        window.open(link.url);
      }}
    >
      {imageSource ? (
        <img className="img" src={imageSource} alt={link.title} />
      ) : (
        <img
          className="img"
          src="/assets/shared/no-image.png"
          alt={link.title}
        />
      )}

      <div className="text-box">
        <p>{calcTimeAgo(createdAt)}</p>
        <p className="desc">{link.description}</p>
        <p className="date">{useConvertDateFormat(createdAt)}</p>
      </div>
    </S.Container>
  );
};

export default ContentCard;
