import searchImg from "../../images/search.svg";
import LinkSearchInputWrapper from "./LinkSearchInputWrapper";

const LinkSearchInput = () => {
  return (
    <LinkSearchInputWrapper>
      <img src={searchImg} alt="검색 이미지" />
      <input placeholder="링크를 검색해 보세요."></input>
    </LinkSearchInputWrapper>
  );
};

export default LinkSearchInput;
