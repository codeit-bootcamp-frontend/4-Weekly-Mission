import styled from "styled-components"
import ModalCheckIcon from "assets/images/icon/modal-check.svg"
import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"

export default function Categories() {
  const { data, selectedItem, onSelectedItem } = useContext(ModalContext)
  return (
    <CategoryList>
      {data.map((links: any) => (
        <CategoryItem key={links.id} $select={selectedItem === links.id}>
          <CategoryItemButton onClick={onSelectedItem!.bind(null, links.id)}>
            <FolderName>{links.name}</FolderName>
            <FolderCount>{links.link.count}개의 링크</FolderCount>
            {selectedItem === links.id && <CheckIcon src={ModalCheckIcon} />}
          </CategoryItemButton>
        </CategoryItem>
      ))}
    </CategoryList>
  )
}

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
