import { useState } from "react"
import styled from "styled-components"
import Modal from "./Modal"
import ModalCheckIcon from "assets/images/icon/modal-check.svg"

const CurrentCategoryName = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: var(--gray2);
  margin: 8px 0 24px 0;
`

const CategoryList = styled.ul`
  max-height: 200px;
  overflow-y: scroll;
`

const CategoryItem = styled.li<{ $select: boolean }>`
  padding: 8px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  ${({ $select }) =>
    $select &&
    `
      background: var(--gray5);
    `}

  & + & {
    margin-top: 12px;
  }
`

const CategoryItemButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

const FolderName = styled.span`
  display: block;
  line-height: 24px;
  color: var(--gray1);
`

const FolderCount = styled.span`
  display: block;
  font-size: 14px;
  color: var(--gray2);
  margin-left: 8px;
`

const CheckIcon = styled.img`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border-radius: 8px;
  color: var(--white);
`

interface AddMyFolderModalProps {
  data: any
  onCloseModal: () => void
}

function AddMyFolderModal({ data, onCloseModal }: AddMyFolderModalProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const handleSelectItem = (id: number) => setSelected(id)

  if (!data) return null
  return (
    <Modal onCloseModal={onCloseModal} title="폴더에 추가">
      <CurrentCategoryName>링크 주소</CurrentCategoryName>
      <CategoryList>
        {data.map((links: any) => (
          <CategoryItem key={links.id} $select={selected === links.id}>
            <CategoryItemButton onClick={handleSelectItem.bind(null, links.id)}>
              <FolderName>{links.name}</FolderName>
              <FolderCount>{links.link.count}개의 링크</FolderCount>
              {selected === links.id && <CheckIcon src={ModalCheckIcon} />}
            </CategoryItemButton>
          </CategoryItem>
        ))}
      </CategoryList>
      <Button>추가하기</Button>
    </Modal>
  )
}

export default AddMyFolderModal
