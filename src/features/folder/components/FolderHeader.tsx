import React, { useState } from "react"
import * as S from "./FolderHeader.style"
import AddLinkIcon from "assets/images/icon/folder-add-link.svg"
import Button from "components/UI/Button"
import useIntersection from "hooks/useIntersection"

function FolderHeader() {
  const [isView, setIsView] = useState(true)

  const onIntersect = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
    observer.unobserve(entry.target)
    setIsView(false)
  }

  const ref = useIntersection<HTMLDivElement>(onIntersect, { threshold: 0 })

  return (
    <S.Folder $isView={!isView}>
      <S.FolderWrapper>
        <S.Form>
          <div className="input-layout" ref={ref}>
            <img src={AddLinkIcon} alt="링크 아이콘" />
            <input type="text" placeholder="링크를 추가해 보세요" name="add-link" />
          </div>
          <Button $bgColor="gradient" $type="addLink" type="submit">
            추가하기
          </Button>
        </S.Form>
      </S.FolderWrapper>
    </S.Folder>
  )
}

export default FolderHeader
