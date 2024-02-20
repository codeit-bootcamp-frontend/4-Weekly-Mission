import headerImg from '../assets/header.png';
import Button from './ui/Button';
import './HomeHeader.css';

const HomeHeader = () => {
  return (
    <header className='header-landing'>
      <div className='header-title'>
        <span className='header-gradient'>세상의 모든 정보</span>
        를 <br /> 쉽게 저장하고 <br className='tablet-br' />
        관리해 보세요
      </div>
      <Button name='header'>링크 추가하기</Button>
      <img className='header-img' src={headerImg} alt='header' />
    </header>
  );
};

export default HomeHeader;
