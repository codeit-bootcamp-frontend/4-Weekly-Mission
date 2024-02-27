import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { getAllLinkData } from "./../api/api";

import HeaderElement from "components/common/HeaderElement";
import FooterElement from "components/common/FooterElement";
import GlobalStyle from "components/common/GlobalStyle";
import FolderInput from "components/folder/FolderInput";
import FolderList from "components/common/FolderList";
import Input from "components/common/Input";
import Menus from "components/folder/Menus";
import FolderTitle from "components/folder/FolderTitle";
import { SharedModal } from "components/common/modals/SharedModal";
import { EditNameModal } from "components/common/modals/EditNameModal";
import { DeleteModal } from "components/common/modals/DeleteModal";
import { AddFolderModal } from "components/common/modals/AddFolderModal";
import { COLORS } from "constants/colors";

const Folder = () => {
  const [titleName, setTitleName] = useState("전체");
  const [listId, setListId] = useState("");
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllLinkData(listId);
        const result = await response.data;
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [listId]);

  return (
    <Container>
      <SharedModal
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <EditNameModal
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <DeleteModal
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <AddFolderModal
        $isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <GlobalStyle />
      <HeaderElement $positionval="static" />
      <FolderInput setIsVisible={setIsModalVisible} />
      <Input />
      <Menus
        changeTitle={setTitleName}
        changeID={setListId}
        $isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
      <FolderTitle titleName={titleName} setIsModal={setIsModalVisible} />
      {data[0] ? (
        <FolderList
          items={data}
          $isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        ></FolderList>
      ) : (
        <NoLinkMsg>저장된 링크가 없습니다.</NoLinkMsg>
      )}
      <AddFolderBtn>폴더 추가 +</AddFolderBtn>
      <FooterElement />
    </Container>
  );
};

const Container = styled.div`
  margin: 0px;
`;

const NoLinkMsg = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-top: 40px;
`;

const AddFolderBtn = styled.button`
  border: none;
  border-radius: 20px;
  border: 1px solid ${COLORS.White};
  background: ${COLORS.Primary};
  position: sticky;
  left: 40%;
  bottom: 101px;
  padding: 8px 24px;
  display: none;

  color: ${COLORS.Grey_200};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  @media (max-width: 774px) {
    display: block;
  }
`;

export default Folder;
