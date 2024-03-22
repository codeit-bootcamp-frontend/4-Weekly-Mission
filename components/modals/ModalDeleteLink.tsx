import ModalDeleteButton from './commons/ModalConfirmButton'
import ModalBase from './commons/ModalBase'
import ModalSubTitle from './commons/ModalSubTitle'
import ModalCloseButton from './commons/ModalCloseButton'

import './Modal.css'

interface Props {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ModalDeleteLink = ({onClick}: Props) => {
  return (
    <ModalBase>
      <div>링크 삭제</div>
      <ModalSubTitle>http://www.abc.com</ModalSubTitle>
      <ModalCloseButton onClick={onClick}/>
      <ModalDeleteButton>삭제하기</ModalDeleteButton>
    </ModalBase>
  )
}

export default ModalDeleteLink