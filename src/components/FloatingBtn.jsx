import styled from "styled-components";
import add from "../assets/add.svg";

const Button = styled.button`
  padding: 8px 24px;
  border-radius: 20px;
  border: 1px solid var(--Linkbrary-white, #fff);
  background: var(--Linkbrary-primary-color, #6d6afe);
  position: fixed;
  bottom: 101px;

  @media${(props) => props.theme.tabletS} {
    display: none;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    color: var(--Linkbrary-gray10, #e7effb);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
    margin: 0px;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

function FloatingBtn() {
  return (
    <Button>
      <Div>
        <p>폴더 추가</p>
        <img src={add} />
      </Div>
    </Button>
  );
}

export default FloatingBtn;
