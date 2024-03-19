import Link from 'next/link'
import Image from 'next/image'

import { getUser } from '@/apis/api'
import logoImg from '@/public/logo.svg'

import './Gnb.css'

interface GnbProps {
  isFixed: boolean;
}

const getProfileData = async () => {
  try {
    const { data } = await getUser();

    return data;
  } catch {
    throw new Error('error')
  }
}

// server component : 상태와 부수 효과, 생명주기를 가질 수 없음.
const Gnb = async ({ isFixed }: GnbProps) => {
  const [user] = await getProfileData();

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
        <div className='account'>
          <img className="account-img" src={user.image_source} alt={`${user.email} 프로필`} />
          <span className='account-email'>{user.email}</span>
        </div>
      </div>
    </nav> 
  )
} // img 태그 사용 이유 : Image는 최적화가 가능한 대신, public에 존재해야 한다. 즉, 서버에서 다운로드한 이미지는 사용 불가.

export default Gnb;