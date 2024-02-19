import styled from "styled-components";
import link from "../../images/link.svg";
const Div = styled.div`
  margin: 0 auto;
  display: flex;
  width: 800px;
  padding: 16px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Button = styled.button`
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  width: 80px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;
const Container = styled.div`
  display: flex;
  padding: 60px 320px 90px 320px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: var(--Linkbrary-bg, #f0f6ff);
`;
const Input = styled.input`
  outline: none;
  color: var(--Linkbrary-gray60, #9fa6b2);

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  border: 0;
`;

export function AddLinkBar() {
  return (
    <Container>
      <Div>
        <Wrapper>
          <img alt="링크이미지" src={link}></img>
          <Input id="add-link" placeholder="링크를 추가해 보세요"></Input>
        </Wrapper>
        <Button>추가하기</Button>
      </Div>
    </Container>
  );
}
