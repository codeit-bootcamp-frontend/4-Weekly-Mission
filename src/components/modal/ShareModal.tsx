import React, { useContext } from "react"
import Modal from "./Modal"

import styled from "styled-components"

import KaKaoIcon from "assets/images/icon/kakao-share.svg"
import FacebookIcon from "assets/images/icon/facebook-share.svg"
import LinkShareIcon from "assets/images/icon/link-share.svg"
import { ProfileContext } from "context/ProfileContext"

const FolderName = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: var(--gray2);
  margin: 8px 0 24px 0;
`

const IconLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconTitle = styled.span`
  display: block;
  margin-top: 5px;
`

const Icon = styled.img`
  width: 42px;
  height: 42px;
  margin: 0 auto;
`

const IconButton = styled.button`
  width: 100%;
`

const Icons = [
  { id: 1, image: KaKaoIcon, title: "카카오톡" },
  { id: 2, image: FacebookIcon, title: "페이스북" },
  { id: 3, image: LinkShareIcon, title: "링크 복사" },
]

interface ShareModalProps {
  onCloseModal: () => void
  folderName: string
  categoryData: any
}

function ShareModal({ onCloseModal, folderName, categoryData }: ShareModalProps) {
  const { data: profileData } = useContext(ProfileContext)
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert("클립보드에 링크가 복사되었습니다.")
    } catch (e) {
      alert("복사에 실패하였습니다")
    }
  }

  return (
    <Modal onCloseModal={onCloseModal} title="폴더 이름 변경">
      <FolderName>{folderName}</FolderName>
      <IconLayout>
        {Icons.map((icon) => (
          <IconButton
            key={icon.id}
            onClick={handleCopyClipBoard.bind(
              null,
              `localhost:3000/shared?user=${profileData.id}?folder=${categoryData.id}`
            )}
          >
            <Icon src={icon.image} alt={`${icon.title}으(로) 폴더 공유하기`} />
            <IconTitle>{icon.title}</IconTitle>
          </IconButton>
        ))}
      </IconLayout>
    </Modal>
  )
}

export default ShareModal
