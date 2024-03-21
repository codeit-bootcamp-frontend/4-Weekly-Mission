import Image from 'next/image'

import close from '@/public/svg/close.svg'

interface Props {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ModalCloseButton = ({onClick}: Props) => {
  return <Image src={close} alt='닫기 버튼' className='closeBtn' onClick={onClick}/>
}

export default ModalCloseButton