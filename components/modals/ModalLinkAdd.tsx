import ModalConfirmButton from './commons/ModalConfirmButton'
import ModalBase from './commons/ModalBase'
import ModalCloseButton from './commons/ModalCloseButton'
import ModalSubTitle from './commons/ModalSubTitle'

import './Modal.css'

interface LinksData {
  children?: React.ReactNode;
  url: string | undefined;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ModalLinkAdd = ({ children, url, onClick }: LinksData) => {
  return (
    <ModalBase>
      <div>폴더에 추가</div>
      <ModalSubTitle>{url}</ModalSubTitle>
      <ModalCloseButton onClick={onClick}/>
      {children}
      <ModalConfirmButton>추가하기</ModalConfirmButton>
    </ModalBase>
  )
}

export default ModalLinkAdd