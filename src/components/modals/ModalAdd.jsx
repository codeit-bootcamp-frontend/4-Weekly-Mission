import ModalConfirmButton from './ModalConfirmButton'

import ModalBase from './ModalBase'
import ModalCloseButton from './ModalCloseButton'
import ModalInput from './ModalInput'
import './Modal.css'
import ModalTitle from './ModalTitle'

const ModalAdd = ({title}) => {
  return (
    <ModalBase>
      <ModalTitle title={title}/>
      <ModalCloseButton/>
      <ModalInput />
      <ModalConfirmButton>추가하기</ModalConfirmButton>
    </ModalBase>
  )
}

export default ModalAdd