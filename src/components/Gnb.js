import './Gnb.css';
import logoImg from '../assets/logo.svg';

const Gnb = ({items}) => {
  const isProfileAvailable = items && items.profileImageSource && items.email;

  return (
    <nav className='gnb_ly'>
      <div className='gnb-inner_ly'>
        <a href="/">
          <img className='logo' src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {isProfileAvailable ? (
          <div className='account'>
            <img className="account-img" src={items.profileImageSource} alt={`${items.email} 프로필`} />
            <span className='account-email'>{items.email}</span>
          </div>
        ) : (
          <button className='login-button'>로그인</button>
        )}
      </div>
    </nav> 
  )
}

export default Gnb;