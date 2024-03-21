import ModalConfirmButton from './commons/ModalConfirmButton'
import ModalBase from './commons/ModalBase'
import ModalCloseButton from './commons/ModalCloseButton'
import ModalInput from './commons/ModalInput'

import './Modal.css'

const ModalLinkAdd = () => {
  return (
    <ModalBase>
      <div>폴더에 추가</div>
      <ModalCloseButton/>
      <ModalInput />
      <ModalConfirmButton>추가하기</ModalConfirmButton>
    </ModalBase>
  )
}

export default ModalLinkAdd