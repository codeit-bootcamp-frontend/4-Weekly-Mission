import linkImg from "../../images/link.svg";
import LinkAddInputWrapper from "./LinkAddInputWrapper";

const LinkAddInput = () => {
  return (
    <LinkAddInputWrapper>
      <img src={linkImg} />
      <input placeholder="링크를 추가해 보세요" />
      <button type="button">추가하기</button>
    </LinkAddInputWrapper>
  );
};

export default LinkAddInput;
