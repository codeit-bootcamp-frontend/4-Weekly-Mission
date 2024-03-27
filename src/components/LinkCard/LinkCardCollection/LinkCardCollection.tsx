import { Link } from "react-router-dom";
import * as S from "./LinkCardCollection.style";
import KebabMenu from "../../Kebab/KebabMenu";
import timePassedFromCreate from "src/Utils/timePassedFromCreate";
import UserLinkDataType from "src/@types/UserLinkDataType";
import { LinkCardFunctionObjectType } from "src/@types/ModalFunctionDataTypes";

interface FolderCardDataPropType {
  contents: UserLinkDataType;
  favorite: boolean;
  kebab?: LinkCardFunctionObjectType[];
}

/**
 *
 * @param { FolderCardData } contents 카드에 대한 전반적인 내용이 담긴 컴포넌트입니다.
 * @param { boolean } favorites 현재 카드의 즐겨찾기 여부를 표시하는 컴포넌트입니다.
 * @param { FolderKebabActionArray } kebab 케밥 메뉴에 대한 동작들이 포함된 컴포넌트입니다.
 * @returns 링크 카드의 세부 사항을 표현하는 컴포넌트입니다.
 */
function FolderCard({ contents, favorite, kebab }: FolderCardDataPropType) {
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
            <S.TextPassedTime className="lb-caption">
              {passedTime}
            </S.TextPassedTime>
            <S.TextLinkDescription className="lb-body1-regular">
              {description}
            </S.TextLinkDescription>
            <S.TextLinkCreatedDate className="lb-body2-regular">
              {editedTime}
            </S.TextLinkCreatedDate>
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
}

interface LinkCardCollectionPropType {
  items: UserLinkDataType[];
  favorite?: boolean;
  kebab?: LinkCardFunctionObjectType[];
}

/**
 *
 * @param { FolderCardData } items 카드에 대한 전반적인 내용이 담긴 요소입니다.
 * @param { boolean } favorite 현재 카드의 즐겨찾기 여부를 표시하는 요소입니다.
 * @param { FolderKebabActionArray } kebab 케밥 메뉴에 대한 동작들이 포함된 컴포넌트입니다.
 * @returns 링크 카드의 그리드 배열을 구현하는 단순 ui 배치형 컴포넌트입니다.
 */
export default function LinkCardCollection({
  items,
  favorite = false,
  kebab,
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
}
