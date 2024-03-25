import React from "react"
import * as S from "features/folder/components/FolderHeader.style"
import AddLinkIcon from "assets/images/icon/folder-add-link.svg"
import Button from "components/UI/Button"

function FixedSearchBar() {
  return (
    <S.Folder $fixed={true}>
      <S.FolderWrapper>
        <S.Form>
          <div className="input-layout">
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

export default FixedSearchBar
