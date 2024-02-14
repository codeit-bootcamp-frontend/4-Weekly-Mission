import GradientButton from '../../components/GradientButton/GradientButton';
import * as S from './Home.styles';
const Home = () => {
  return (
    <>
      <S.HomeSection>
        <S.HomeTitle>
          <span>세상의 모든 정보</span>
          를
          <br />
          쉽게 저장하고 관리해보세요
        </S.HomeTitle>
        <GradientButton href='./pages/signup.html'>링크 추가하기</GradientButton>
        <S.HomeImage src='assets/landing-main.svg' alt='메인-이미지' />
      </S.HomeSection>
      <S.MainLayout>
        <S.MainSection>
          <S.MainTitle>
            <span>원하는 링크</span>
            를
            <br />
            저장하세요.
          </S.MainTitle>
          <S.MainDescription>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상,
            <br />
            사고 싶은 옷, 기억하고 싶은 모든 것을
            <br />한 공간에 저장하세요.
          </S.MainDescription>
          <S.MainImage src='assets/landing-download.svg' alt='저장-이미지' />
        </S.MainSection>
        <S.MainSection>
          <S.MainTitle>
            링크를 폴더로
            <br />
            <span>관리</span>
            하세요
          </S.MainTitle>
          <S.MainDescription>
            나만의 폴더를 무제한으로 만들고
            <br />
            다양하게 활용할 수 있습니다.
          </S.MainDescription>
          <S.MainImage src='./assets/landing-folder.svg' alt='폴더-관리-이미지' />
        </S.MainSection>
        <S.MainSection>
          <S.MainTitle>
            저장한 링크를
            <br />
            <span>공유</span>
            해보세요.
          </S.MainTitle>
          <S.MainDescription>
            여러 링크를 폴더에 담고 공유할 수 있습니다.
            <br />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를
            <br />
            공유해 보세요.
          </S.MainDescription>
          <S.MainImage src='./assets/landing-share.svg' alt='공유-이미지' />
        </S.MainSection>
        <S.MainSection>
          <S.MainTitle>
            저장한 링크를
            <br />
            <span>검색</span>해 보세요
          </S.MainTitle>
          <S.MainDescription>중요한 정보들을 검색으로 쉽게 찾아보세요.</S.MainDescription>
          <S.MainImage src='./assets/landing-search.svg' alt='검색-이미지' />
        </S.MainSection>
      </S.MainLayout>
    </>
  );
};

export default Home;
