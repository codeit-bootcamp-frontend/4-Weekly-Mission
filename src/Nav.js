import AvatarIcon from './assets/avatar.svg';
import './style.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <img src={AvatarIcon} alt='avatar icon image' />
      <div>@코드잇</div>
      <div className='bookmark'>
        ⭐️ 즐겨찾기
      </div>
    </nav>
  )
}

export default Nav;