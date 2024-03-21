import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/public/logo.svg'
import GnbProfile from './GnbProfile'

import './Gnb.css'

interface GnbProps {
  isFixed: boolean;
}

const Gnb = ({ isFixed }: GnbProps) => {
  const gnbStyle: React.CSSProperties = {
    position: isFixed ? 'sticky' : 'static',
    top: 0,
    zIndex: 1020
  };

  return (
    <nav className='gnb_ly' style={gnbStyle}>
      <div className='gnb-inner_ly'>
        <Link href="/">
          <Image className='logo' src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </Link>
        <GnbProfile />
      </div>
    </nav> 
  )
}

export default Gnb;