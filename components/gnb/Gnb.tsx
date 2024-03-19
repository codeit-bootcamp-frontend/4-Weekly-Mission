'use client'

import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/public/logo.svg'

import './Gnb.css'

interface GnbProps {
  isFixed: boolean;
  children: React.ReactNode
}

const Gnb = ({ isFixed, children }: GnbProps) => {
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
        {children}
      </div>
    </nav> 
  )
} // img 태그 사용 이유 : Image는 최적화가 가능한 대신, public에 존재해야 한다. 즉, 서버에서 다운로드한 이미지는 사용 불가.

export default Gnb;