import ModalDeleteButton from './ModalConfirmButton'

import ModalBase from './ModalBase'
import ModalCloseButton from './ModalCloseButton'
import './Modal.css'
import ModalTitle from './ModalTitle'
import ModalSubTitle from './ModalSubTitle'

const ModalDeleteFolder = ({title}) => {
  return (
    <ModalBase>
      <ModalTitle title={title}/>
      <ModalSubTitle>폴더명</ModalSubTitle>
      <ModalCloseButton/>
      <ModalDeleteButton>삭제하기</ModalDeleteButton>
    </ModalBase>
  )
}

export default ModalDeleteFolder
