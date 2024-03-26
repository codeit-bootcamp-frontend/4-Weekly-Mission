import ModalBase from './commons/ModalBase'
import ModalCloseButton from './commons/ModalCloseButton'
import ModalSubTitle from './commons/ModalSubTitle'
import ModalShareIconsBox from './share/ModalShareIconsBox'

import './Modal.css'

interface Props {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  currentFolderName: null | string;
}

const ModalFolderShare = ({onClick, currentFolderName}: Props) => {
  return (
    <ModalBase onClick={onClick}>
      <div>폴더 공유</div>
      <ModalSubTitle>{currentFolderName}</ModalSubTitle>
      <ModalCloseButton onClick={onClick}/>
      <ModalShareIconsBox />
    </ModalBase>
  )
}

export default ModalFolderShare

