import styled from "styled-components";
import ModalContainer from "../common/Modal/Modal";
import * as Modal from "../common/Modal/Modal";
import ModalFoderList from "../common/Modal/ModalFoderList";
import { useModal } from "hooks/useModal";

const Layout = styled.section`
  width: 100%;
  background: var(--Linkbrary-bg, #f0f6ff);
  display: flex;
  justify-content: center;
  padding: 60px 0 90px 0;
`;

const Container = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  padding: 16px 20px;
  background-color: white;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);

  @media (max-width: 1124px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 325px;
  }
`;

const InputLayout = styled.div`
  width: 90%;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 1124px) {
    width: 80%;
  }

  @media (max-width: 767px) {
    width: 70%;
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;
const Input = styled.input`
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Button = styled.div`
  width: 81px;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: var(--Grey-Light, #f5f5f5);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

function Banner() {
  const { openModal, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      {openModal && (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>폴더의 추가</Modal.Title>
          <Modal.SubTitle>링크 주소</Modal.SubTitle>
          <ModalFoderList />
          <Modal.BlueButton>추가하기</Modal.BlueButton>
        </ModalContainer>
      )}

      <Layout>
        <Container>
          <InputLayout>
            <Img src="/Icons/link.svg" alt="link" />
            <Input type="text" placeholder="링크를 추가해 보세요" />
          </InputLayout>
          <Button onClick={handleModalOpen}>추가하기</Button>
        </Container>
      </Layout>
    </>
  );
}

export default Banner;
