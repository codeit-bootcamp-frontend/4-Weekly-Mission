import ModalConfirmButton from './commons/ModalConfirmButton'
import ModalBase from './commons/ModalBase'
import ModalCloseButton from './commons/ModalCloseButton'
import ModalInput from './commons/ModalInput'

import './Modal.css'

interface Props {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ModalRenameFolder = ({ onClick }: Props)=>{
  return (
    <ModalBase onClick={onClick}>
      <div>폴더 이름 변경</div>
      <ModalCloseButton onClick={onClick}/>
      <ModalInput />
      <ModalConfirmButton>변경하기</ModalConfirmButton>
    </ModalBase>
  )
}

export default ModalRenameFolder