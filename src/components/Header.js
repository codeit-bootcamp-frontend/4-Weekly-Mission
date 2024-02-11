import Userprofile from '../images/avatar.png'
import '../css/Header.css';

function Header() {
  return (
    <header className='header-items'>
      <img src={Userprofile} alt="userProfile" />
      <div className='username'>@코드잇</div>
      <div className='folder-name'>⭐️ 즐겨찾기</div>
    </header>
  )
}

export default Header;