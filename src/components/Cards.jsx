import imgNone from "../assets/이미지 없을 때 배경.svg";
import styled from "styled-components";
import star from "../assets/star.svg";
import kebab from "../assets/kebab.svg";

function dateDiff(createdAt) {
  const present = Date.now();
  const createdLinkDate = new Date(createdAt);
  const diff = present - createdLinkDate;

  const TIME_TO_MS = {
    twoMinutes: 120000,
    oneHour: 3600000,
    twoHours: 7200000,
    oneDay: 86400000,
    twoDays: 172800000,
    oneMonth: 2628000000,
    twoMonths: 5256000000,
    oneYear: 31540000000,
    twoYears: 63070000000,
  };

  if (diff < TIME_TO_MS.twoMinutes) {
    return "1 minute ago";
  } else if (diff < TIME_TO_MS.oneHour) {
    return `${Math.floor(diff / 1000 / 60)} minutes ago`;
  } else if (diff < TIME_TO_MS.twoHours) {
    return "1 hour ago";
  } else if (diff < TIME_TO_MS.oneDay) {
    return `${Math.floor(diff / 1000 / 60 / 60)} hours ago`;
  } else if (diff < TIME_TO_MS.twoDays) {
    return "1 day ago";
  } else if (diff < TIME_TO_MS.oneMonth) {
    return `${Math.floor(diff / 1000 / 60 / 60 / 24)} days ago`;
  } else if (diff < TIME_TO_MS.twoMonths) {
    return "1 month ago";
  } else if (diff < TIME_TO_MS.oneYear) {
    return `${Math.floor(diff / 1000 / 60 / 60 / 24 / 30)} months ago`;
  } else if (diff < TIME_TO_MS.twoYears) {
    return "1 year ago";
  } else {
    return `${Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12)} years ago`;
  }
}

const ContainDiv = styled.div`
  width: 325px;
  height: 327px;
  flex-shrink: 0;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  position: relative;

  &: hover img {
    transform: scale(1.3);
    transition-duration: 0.5s;
  }

  @media ${(props) => props.theme.tabletS} {
    width: 340px;
    height: 334px;
  }
`;

const WrappedImg = styled.div`
  width: 325px;
  height: 192px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 15px 15px 0px 0px;
  background: #d9d9d9;

  @media ${(props) => props.theme.tabletS} {
    width: 340px;
    height: 200px;
  }
`;

const StarButton = styled.button`
  background: no-repeat center url(${star});
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1;

  @media ${(props) => props.theme.tabletS} {
    width: 34px;
    height: 34px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0px 0px;
  background: #d9d9d9;
  transition-duration: 0.3s;
  object-fit: cover;
`;

const DescriptionDiv = styled.div`
  display: flex;
  width: 325px;
  padding: 15px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 0px 0px 15px 15px;
  background: #fff;

  p {
    margin: 0px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
  }

  @media ${(props) => props.theme.tabletS} {
    width: 340px;
  }
`;

const TextDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  p {
    color: #666;
    font-size: 13px;
    line-height: normal;
  }
`;

const KebabButton = styled.button`
  background: no-repeat center url(${kebab});
  width: 21px;
  height: 17px;
  flex-shrink: 0;
  border: none;
`;

const TextDiv2 = styled.div`
  height: 49px;
  align-self: stretch;

  p {
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 16px;
    line-height: 24px; /* 150% */
  }
`;

const TextDiv3 = styled.div`
  height: 19px;
  align-self: stretch;

  p {
    color: #333;
    font-size: 14px;
    line-height: normal;
  }
`;

const INITIAL_LINK_IMG = imgNone;

function Card({ link }) {
  const linkUrl = link.url;

  const handleCardClick = () => {
    window.open(linkUrl, "_blank");
  };

  const handleNoneBubblingClick = (event) => event.stopPropagation();

  return (
    <ContainDiv onClick={handleCardClick}>
      <WrappedImg>
        <StarButton onClick={handleNoneBubblingClick} />
        <StyledImg
          src={link?.imageSource ?? INITIAL_LINK_IMG}
          alt="미리보기 이미지"
        />
      </WrappedImg>
      <DescriptionDiv>
        <TextDiv1>
          <p>{dateDiff(link?.createdAt)}</p>
          <KebabButton onClick={handleNoneBubblingClick} />
        </TextDiv1>
        <TextDiv2>
          <p>{link?.description}</p>
        </TextDiv2>
        <TextDiv3>
          <p> {link?.createdAt.slice(0, 10)}</p>
        </TextDiv3>
      </DescriptionDiv>
    </ContainDiv>
  );
}

const CardsUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 25px;

  @media ${(props) => props.theme.tabletS} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px 24px;
  }
  @media ${(props) => props.theme.tabletL} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px 20px;
  }
`;

function Cards({ links }) {
  return (
    <div>
      <CardsUl>
        {links &&
          links.map((link) => (
            <li key={link.id}>
              <Card link={link} />
            </li>
          ))}
      </CardsUl>
    </div>
  );
}

export default Cards;
