import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import link from '../image/link.svg';
import { getFolderType } from '../api';
import Add from '../modals/Add';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #f0f6ff;
  @media (min-width: 375px) and (max-width: 767px) {
    padding: 24px 32px;
  }
  @media (min-width: 768px) and (max-width: 1123px) {
    padding-top: 60px;
    padding-bottom: 90px;
    padding-left: max(32px, calc((100vw - 724px) / 2));
    padding-right: max(32px, calc((100vw - 724px) / 2));
  }
  @media (min-width: 1124px) {
    padding: 60px 199px 90px 200px;
  }
`;
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 340px;
  }
  @media (min-width: 768px) and (max-width: 1123px) {
    width: min(700px, 100vw);
  }
  @media (min-width: 1124px) {
    width: 800px;
  }
`;
const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 16px 40px;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);

  &:placeholder {
    color: var(--Linkbrary-gray60, #9fa6b2);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
const Img = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;
const Button = styled.button`
  display: flex;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 70px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;
function Gnbfolder() {
  const [data, setData] = useState([]);
  const [isButtonSelected, setButtonSelected] = useState(false);
  useEffect(() => {
    async function getFolderData() {
      const result = await getFolderType();
      const updateData = [...result.data];
      setData(updateData);
    }
    getFolderData();
  }, []);

  const folderList = data.map((item) => ({
    id: item.id,
    name: item.name,
    count: item.link.count,
  }));
  const handleButtonClick = () => {
    setButtonSelected(true);
  };
  const handleCloseClick = () => {
    setButtonSelected(false);
  };

  return (
    <Container>
      <InputContainer>
        <Input placeholder="링크를 추가해 보세요" />
        <Img src={link} alt="link" />
        <Button onClick={handleButtonClick}>추가하기</Button>
        {isButtonSelected &&
          ReactDOM.createPortal(
            <Add data={folderList} onClose={handleCloseClick} />,
            document.getElementById('modal-root')
          )}
      </InputContainer>
    </Container>
  );
}
export default Gnbfolder;
