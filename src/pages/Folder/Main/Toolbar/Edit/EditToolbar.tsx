import { useState } from "react";
import ShareModal from "components/common/Modal/ShareModal";
import InputModal from "components/common/Modal/InputModal";
import DeleteModal from "components/common/Modal/DeleteModal";
import { EDIT_SHARE, EDIT_CHANGE, EDIT_DELETE } from "constnats/image";
import * as S from "./EditToolbarStyle";

interface Props {
  folderName: string;
}

const EditToolbar = ({ folderName }: Props) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showInputModal, setShowInputModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleShareModal = () => {
    setShowShareModal(!showShareModal);
  };

  const handleInputModal = () => {
    setShowInputModal(!showInputModal);
  };

  const handleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  return (
    <>
      <S.Container>
        <S.Box onClick={handleShareModal}>
          <S.Image src={EDIT_SHARE} alt="share" />
          <S.Text>공유</S.Text>
          {showShareModal && (
            <ShareModal
              title="공유 하기"
              folderName={folderName}
              onClose={handleShareModal}
            />
          )}
        </S.Box>
        <S.Box onClick={handleInputModal}>
          <S.Image src={EDIT_CHANGE} alt="chage" />
          <S.Text>이름 변경</S.Text>
          {showInputModal && (
            <InputModal
              title="폴더 이름 변경"
              placeholder={folderName}
              onClose={handleInputModal}
            >
              변경하기
            </InputModal>
          )}
        </S.Box>
        <S.Box onClick={handleDeleteModal}>
          <S.Image src={EDIT_DELETE} alt="delete" />
          <S.Text>삭제</S.Text>
          {showDeleteModal && (
            <DeleteModal
              title="폴더 삭제"
              text={folderName}
              onClose={handleDeleteModal}
            >
              변경하기
            </DeleteModal>
          )}
        </S.Box>
      </S.Container>
    </>
  );
};

export default EditToolbar;
