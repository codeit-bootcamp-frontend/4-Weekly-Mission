import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import LinkInput from './LinkInput';
import { getFolderType } from '../../api';
import Add from '../../modals/Add';
import { modalRoot } from '../../consts/const';
import { Folder } from '../../consts/type';
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

function Gnbfolder() {
  const [data, setData] = useState<Folder[]>([]);
  const [isButtonSelected, setButtonSelected] = useState<boolean>(false);
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
        <LinkInput onClick={handleButtonClick} />
        {isButtonSelected && ReactDOM.createPortal(<Add data={folderList} onClose={handleCloseClick} />, modalRoot)}
      </InputContainer>
    </Container>
  );
}
export default Gnbfolder;
