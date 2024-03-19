import Link from 'next/link';
import Image from 'next/image';

import logoImg from '../../public/logo.svg';

import './Gnb.css';

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
        {/* {isShowProfile ? (
          <div className='account'>
            <img className="account-img" src={user.image_source} alt={`${user.email} 프로필`} />
            <span className='account-email'>{user.email}</span>
          </div>
        ) : (
          <button className='login-button' type='button'>로그인</button>
        )} */}
      </div>
    </nav> 
  )
}

export default Gnb;