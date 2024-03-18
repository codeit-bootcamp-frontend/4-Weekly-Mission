import { Link } from "react-router-dom";
import * as S from "./LinkCardCollection.style";
import KebabMenu from "../Utils/KebabMenu";
import timePassedFromCreate from "src/Utils/timePassedFromCreate";
import UserLinkDataType from "src/@types/UserLinkDataType";

interface FolderCardDataPropType {
  contents: UserLinkDataType;
  favorite?: boolean;
  kebab?: boolean;
}

const FolderCard = function ({
  contents,
  favorite,
  kebab,
}: FolderCardDataPropType) {
  const {
    id,
    created_at,
    createdAt,
    description,
    imageSource,
    image_source,
    url,
  } = contents;

  const cardImage = imageSource || image_source;
  const timeConversion = new Date(created_at || createdAt!); // sampleApi와 userApi의 양식이 달라 호환시키기 위함
  const passedTime = timePassedFromCreate(timeConversion);
  const editedTime = `${timeConversion.getFullYear()}. ${
    timeConversion.getMonth() + 1
  }. ${timeConversion.getDate()}`;

  return (
    <S.CardBoxOriginPosition key={id}>
      <S.CardWrapper>
        <Link to={url} target="_blank">
          <S.CardImageDiv $image={cardImage} />

          <S.TextSection>
            <S.TextPassedTime>{passedTime}</S.TextPassedTime>
            <S.TextLinkDescription>{description}</S.TextLinkDescription>
            <S.TextLinkCreatedDate>{editedTime}</S.TextLinkCreatedDate>
          </S.TextSection>
        </Link>
      </S.CardWrapper>
      {kebab && <KebabMenu items={kebab} data={url} />}
      {favorite && (
        <S.FavorStarButton type="button">
          <img src="star.svg" alt="FavoriteButton" />
        </S.FavorStarButton>
      )}
    </S.CardBoxOriginPosition>
  );
};

interface LinkCardCollectionPropType {
  items: UserLinkDataType[];
  favorite?: boolean;
  kebab?: any;
}

const LinkCardCollection = function ({
  items,
  favorite = false,
  kebab = false,
}: LinkCardCollectionPropType) {
  return (
    <S.CardGridLayout>
      {items.map((item) => (
        <FolderCard
          key={item.id}
          contents={item}
          favorite={favorite}
          kebab={kebab}
        />
      ))}
    </S.CardGridLayout>
  );
};

export default LinkCardCollection;
