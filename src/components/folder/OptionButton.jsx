import React, { useState } from 'react';
import Share from 'assets/images/share.png';
import Rename from 'assets/images/pen.png';
import Delete from 'assets/images/delete.png';
import styled from 'styled-components';
import Modal from 'components/common/modal/Modal';
import PostModal from 'components/common/modal/PostModal';
import DeleteModal from 'components/common/modal/DeleteModal';
import ShareModal from 'components/common/modal/ShareModal';

const OptionButton = ({ placeholder, folderName, categoryId }) => {
  const BUTTON = [
    { url: Share, name: '공유' },
    { url: Rename, name: '이름 변경' },
    { url: Delete, name: '삭제' },
  ];
  const [showModal, setShowModal] = useState(false);
  const [modalName, setModalName] = useState('');

  const handleClick = name => {
    setShowModal(true);
    setModalName(name);
  };
  const renderModalContent = () => {
    switch (modalName) {
      case '공유':
        return (
          <ShareModal
            title="공유하기"
            subTitle={folderName}
            categoryId={categoryId}
          />
        );
      case '이름 변경':
        return (
          <PostModal
            title="폴더 이름 변경"
            placeholder={placeholder}
            isAdd={false}
          />
        );
      case '삭제':
        return <DeleteModal title="폴더 삭제" subTitle={folderName} />;
      default:
        return null;
    }
  };

  return (
    <OptionContainer>
      {BUTTON.map(button => (
        <Option key={button.name} onClick={() => handleClick(button.name)}>
          <OptionIcon $url={button.url}></OptionIcon>
          <OptionText>{button.name}</OptionText>
        </Option>
      ))}
      {showModal && (
        <Modal showModal={showModal} handleClose={() => setShowModal(false)}>
          {renderModalContent()}
        </Modal>
      )}
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const Option = styled.button`
  background: transparent;
  display: flex;
  gap: 0.4rem;
  cursor: pointer;
`;
const OptionIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  background-image: url(${({ $url }) => $url});
  background-size: cover;
`;
const OptionText = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  color: ${props => props.theme.gray20};
`;
export default OptionButton;
