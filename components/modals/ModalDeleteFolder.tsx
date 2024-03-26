import ModalDeleteButton from './commons/ModalDeleteButton'
import ModalBase from './commons/ModalBase'
import ModalSubTitle from './commons/ModalSubTitle'
import ModalCloseButton from './commons/ModalCloseButton'

import './Modal.css'

interface Props {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  currentFolderName: null | string;
}

const ModalDeleteFolder = ({onClick, currentFolderName}: Props) => {
  return (
    <ModalBase onClick={onClick}>
      <div>폴더 삭제</div>
      <ModalSubTitle>{currentFolderName}</ModalSubTitle>
      <ModalCloseButton onClick={onClick}/>
      <ModalDeleteButton>삭제하기</ModalDeleteButton>
    </ModalBase>
  )
}

export default ModalDeleteFolder