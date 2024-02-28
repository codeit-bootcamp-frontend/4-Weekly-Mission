import * as S from './HomeHeaderStyle';
import headerImg from '../../../assets/header.png';
import Button from '../../../components/Button';

const HomeHeader = () => {
  return (
    <S.LandingHeader>
      <S.LandingTitle>
        <S.TextGradientHeader>세상의 모든 정보</S.TextGradientHeader>
        를 <br /> 쉽게 저장하고 <br className='tablet-br' />
        관리해 보세요
      </S.LandingTitle>
      <Button width='350px' mobileWidth='200px' $font='large'>
        링크 추가하기
      </Button>
      <S.LandingHeaderImage src={headerImg} alt='header' />
    </S.LandingHeader>
  );
};

export default HomeHeader;
