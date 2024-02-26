import starIcon from "../img/star.png";
import styled from "styled-components";
import { getTime } from "../utils";
import kebab from "../img/kebab.png";
import { useState } from "react";
const LinkCardBlock = styled.div`
  width: 340px;
  height: 334px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.5s;
  position: relative;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 5px 5px 13px rgba(0, 0, 0, 0.5);
  }
`;

const Star = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const Option = styled.div`
  width: 10rem;
  position: absolute;
  bottom: -60px;
  right: 0px;
  background-color: #fff;
  visibility: ${({ visibility }) => (visibility ? "visible" : "hidden")};
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  button {
  }
  button:hover {
  }
`;

const OptionBtn = styled.button`
  padding: 0.7rem 1.2rem;
  width: 100%;
  color: #333236;
  font-size: 1.4rem;

  &:hover {
    background-color: #e7effb;
    color: #6d6afe;
  }
`;

const CardDescription = styled.p`
  font-size: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 2.4em;
  margin-bottom: 1rem;
`;

const CardImgBox = styled.div`
  width: 100%;
  height: 20rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem 2rem;
`;

const Wrap = styled.div`
  font-size: 1.3rem;
  color: #666;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CreateDate = styled.span`
  color: #333;
  font-size: 1.4rem;
`;

const OptionMenuBtn = styled.button`
  position: relative;
  z-index: 500;
  padding: 5px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

function LinkCard({ linkData, dispatch }) {
  const { createdAt, url, description, imageSource, created_at, image_source } =
    linkData;
  const createDate = createdAt ? new Date(createdAt) : new Date(created_at);
  const millisecondsGap = new Date() - createDate;
  const [show, setShow] = useState(false);

  const optionShow = () => {
    setShow(!show);
  };

  return (
    <LinkCardBlock>
      <Star>
        <img src={starIcon} alt="즐겨찾기 추가 버튼" />
      </Star>
      <a href={url} target="_blank">
        <CardImgBox>
          <img
            src={imageSource ? imageSource : image_source}
            alt="링크카드 이미지"
          />
        </CardImgBox>
      </a>
      <CardContent>
        <Wrap>
          {getTime(millisecondsGap)}
          <OptionMenuBtn onClick={optionShow}>
            <img src={kebab} alt="추가 기능" />
            <Option visibility={show}>
              <OptionBtn
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
              </OptionBtn>
              <OptionBtn
                onClick={() => {
                  dispatch({ state: true, type: "AddAtFolder", url: url });
                }}
              >
                폴더에 추가
              </OptionBtn>
            </Option>
          </OptionMenuBtn>
        </Wrap>
        <CardDescription>{description}</CardDescription>
        <CreateDate>
          {`${createDate.getFullYear()}. ${
            createDate.getMonth() + 1
          }. ${createDate.getDate()}`}
        </CreateDate>
      </CardContent>
    </LinkCardBlock>
  );
}

export default LinkCard;
