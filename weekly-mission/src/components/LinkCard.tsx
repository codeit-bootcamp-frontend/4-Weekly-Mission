import starIcon from "assests/img/star.png";
import kebab from "assests/img/kebab.png";
import { getTime } from "utils";
import { useState } from "react";
import * as S from "./LinkCard.styled";
import { Links } from "typeStore";
import defaultImg from "assests/img/defaultImg.png";
interface LinkCardProps {
  linkData: any;
  dispatch?: any;
}

const LinkCard: React.FC<LinkCardProps> = ({ linkData, dispatch }) => {
  const { createdAt, url, description, imageSource, created_at, image_source } =
    linkData;
  const createDate = createdAt ? new Date(createdAt) : new Date(created_at);
  const Today = new Date();
  const millisecondsGap = Today.getTime() - createDate.getTime();
  const [show, setShow] = useState<boolean>(false);

  const optionShow = () => {
    setShow(!show);
  };

  return (
    <S.LinkCardBlock>
      <S.Star>
        <S.StarIcon src={starIcon} alt="즐겨찾기 추가 버튼" />
      </S.Star>
      <S.Link href={url} target="_blank" rel="noreferrer">
        <S.CardImgBox>
          <S.CardImg
            src={imageSource || image_source || defaultImg}
            alt="링크카드 이미지"
          />
        </S.CardImgBox>
      </S.Link>
      <S.CardContent>
        <S.Wrap>
          {getTime(millisecondsGap)}
          <S.KebabWrap>
            <S.OptionMenuBtn onClick={optionShow}>
              <S.KebabIcon src={kebab} alt="추가 기능" />
            </S.OptionMenuBtn>
            <S.Option $visible={show}>
              <S.OptionBtn
                onClick={() => {
                  dispatch({
                    state: true,
                    type: "Delete",
                    title: "링크 삭제",
                    deleteTarget: url,
                  });
                }}
              >
                삭제하기
              </S.OptionBtn>
              <S.OptionBtn
                onClick={() => {
                  dispatch({ state: true, type: "AddAtFolder", url: url });
                }}
              >
                폴더에 추가
              </S.OptionBtn>
            </S.Option>
          </S.KebabWrap>
        </S.Wrap>
        <S.CardDescription>{description}</S.CardDescription>
        <S.CreateDate>
          {`${createDate.getFullYear()}. ${
            createDate.getMonth() + 1
          }. ${createDate.getDate()}`}
        </S.CreateDate>
      </S.CardContent>
    </S.LinkCardBlock>
  );
};

export default LinkCard;
