import styled from "styled-components";
import linkImg from "../../images/link.svg";
import LinkAddForm from "./LinkAddForm";

const Div = styled.div`
  background-color: #f0f6ff;
  padding: 100px 3rem;
`;
const LinkAddInput = () => {
  return (
    <Div>
      <LinkAddForm>
        <img src={linkImg} alt="링크 이미지" />
        <input placeholder="링크를 추가해 보세요" />
        <button type="button">추가하기</button>
      </LinkAddForm>
    </Div>
  );
};

export default LinkAddInput;
