'use client'

import { useState } from "react";
import styled from "styled-components"

import ModalLinkAdd from "@/components/modals/ModalLinkAdd";
import ModalDeleteLink from "@/components/modals/ModalDeleteLink";

interface LinksData {
  children?: React.ReactNode;
  url: string | undefined;
}

const LinkEditDropdown = ({ children, url }: LinksData) => {
  const [isOpenModalLinkAdd, setIsOpenModalLinkAdd] = useState(false);
  const [isOpenModalDeleteLink, setIsOpenModalDeleteLink] = useState(false);

  const handleClickModalLinkAdd = () => {
    setIsOpenModalLinkAdd((isOpenModalLinkAdd) => !isOpenModalLinkAdd);
  }

  const handleClickModalDeleteLink = () => {
    setIsOpenModalDeleteLink((isOpenModalDeleteLink) => !isOpenModalDeleteLink);
  }

  return (
    <DropdownContainer>
      <DropdownMenu onClick={handleClickModalDeleteLink}>
        <Text>삭제하기</Text>
      </DropdownMenu>
      {isOpenModalDeleteLink && 
        <ModalDeleteLink onClick={handleClickModalDeleteLink}/>
      }
      <DropdownMenu onClick={handleClickModalLinkAdd}>
        <Text>폴더에 추가</Text>
      </DropdownMenu>
      {isOpenModalLinkAdd && 
        <ModalLinkAdd url={url} onClick={handleClickModalLinkAdd}>{children}</ModalLinkAdd>
      }
    </DropdownContainer>
  )
}

export default LinkEditDropdown

const DropdownContainer = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

`

const Text = styled.span`
  color: var(--gray-light-gray-100, #333236);

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const DropdownMenu = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: #FFF;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    transition: 0.5s;
    background-color: #E7EFFB;

    ${Text} {
      color: #6D6AFE;
    }
  }
`