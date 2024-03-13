import ModalBase from './ModalBase'
import ModalCloseButton from './ModalCloseButton'
import './Modal.css'
import ModalTitle from './ModalTitle'
import ModalSubTitle from './ModalSubTitle'
import ModalShareIconsBox from './ModalShareIconsBox'

const ModalShare = ({title}) => {
  return (
    <ModalBase>
      <ModalTitle title={title}/>
      <ModalSubTitle>폴더명</ModalSubTitle>
      <ModalCloseButton/>
      <ModalShareIconsBox />
    </ModalBase>
  )
}

export default ModalShare

