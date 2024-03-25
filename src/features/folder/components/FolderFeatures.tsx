import * as S from "features/folder/components/FolderFeatures.style"

import ShareIcon from "assets/images/icon/feature-share.svg"
import DeleteIcon from "assets/images/icon/feature-delete.svg"
import NameEditIcon from "assets/images/icon/feature-edit.svg"

import FolderChangeNameModal from "components/modal-compound/FolderChangeNameModal"
import DeleteFolderModal from "components/modal-compound/DeleteFolrderModal"
import ShareModal from "components/modal-compound/ShareModal"
import useModal from "../hooks/useModal"

interface FolderFeaturesProps {
  categoryName: string
  categoryData: any
}

function FolderFeatures({ categoryName, categoryData }: FolderFeaturesProps) {
  const { modalValue, handleOpenModal, handleCloseModal } = useModal()

  return (
    <S.Features>
      {modalValue === "이름변경" && <FolderChangeNameModal categoryName={categoryName} onCloseModal={handleCloseModal} />}
      {modalValue === "삭제" && <DeleteFolderModal categoryName={categoryName} onCloseModal={handleCloseModal} />}
      {modalValue === "공유" && <ShareModal categoryData={categoryData} categoryName={categoryName} onCloseModal={handleCloseModal} />}

      <S.FeatureItem>
        <button onClick={handleOpenModal.bind(null, "공유")}>
          <img src={ShareIcon} alt="" />
          <span>공유</span>
        </button>
      </S.FeatureItem>

      <S.FeatureItem>
        <button onClick={handleOpenModal.bind(null, "이름변경")}>
          <img src={NameEditIcon} alt="" />
          <span>이름변경</span>
        </button>
      </S.FeatureItem>

      <S.FeatureItem>
        <button onClick={handleOpenModal.bind(null, "삭제")}>
          <img src={DeleteIcon} alt="" />
          <span>삭제</span>
        </button>
      </S.FeatureItem>
    </S.Features>
  )
}

export default FolderFeatures
