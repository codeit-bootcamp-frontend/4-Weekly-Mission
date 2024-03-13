import ModalConfirmButton from './ModalConfirmButton'

import ModalBase from './ModalBase'
import ModalCloseButton from './ModalCloseButton'
import './Modal.css'
import ModalTitle from './ModalTitle'
import ModalSubTitle from './ModalSubTitle'
import ModalList from './ModalList'

const ModalLinkAdd = ({ folderList, url, onClickModalLinkAdd }) => {

  return (
    <ModalBase>
      <ModalTitle title='링크 추가'/>
      <ModalSubTitle>{url}</ModalSubTitle>
      <ModalCloseButton onClickModalLinkAdd={onClickModalLinkAdd}/>
      <ModalList list={folderList}/>
      <ModalConfirmButton>추가하기</ModalConfirmButton>
    </ModalBase>
  )
}

export default ModalLinkAdd