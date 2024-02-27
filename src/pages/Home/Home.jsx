import GradientButton from '../../components/common/GradientButton/GradientButton';
import GradientText from '../../components/common/GradientText/GradientText';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <section className={styles.layout}>
        <h1 className={styles.title}>
          <GradientText startColor='$color-primary' endColor='#ff9f9f'>
            세상의 모든 정보
          </GradientText>
          를
          <br />
          쉽게 저장하고 관리해보세요
        </h1>
        <div className={styles.addButton}>
          <GradientButton href='./pages/signup.html'>링크 추가하기</GradientButton>
        </div>
        <img className={styles.homeImage} src='assets/landing-main.svg' alt='메인-이미지' />
      </section>
      <main className={styles.mainLayout}>
        <article className={styles.mainBox}>
          <h2 className={styles.title}>
            <GradientText startColor='#fe8a8a' endColor='#a4ceff'>
              원하는 링크
            </GradientText>
            를
            <br />
            저장하세요.
          </h2>
          <p className={styles.description}>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상,
            <br />
            사고 싶은 옷, 기억하고 싶은 모든 것을
            <br />한 공간에 저장하세요.
          </p>
          <img className={styles.mainImage} src='assets/landing-download.svg' alt='저장-이미지' />
        </article>
        <article className={styles.mainBox}>
          <h2 className={styles.title}>
            링크를 폴더로
            <br />
            <GradientText startColor='#6fbaff' endColor='#ffd88b'>
              관리
            </GradientText>
            하세요
          </h2>
          <p className={styles.description}>
            나만의 폴더를 무제한으로 만들고
            <br />
            다양하게 활용할 수 있습니다.
          </p>
          <img className={styles.mainImage} src='./assets/landing-folder.svg' alt='폴더-관리-이미지' />
        </article>
        <article className={styles.mainBox}>
          <h2 className={styles.title}>
            저장한 링크를
            <br />
            <GradientText startColor='#6d7ccd' endColor='#52886b'>
              공유
            </GradientText>
            해보세요.
          </h2>
          <p className={styles.description}>
            여러 링크를 폴더에 담고 공유할 수 있습니다.
            <br />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를
            <br />
            공유해 보세요.
          </p>
          <img className={styles.mainImage} src='./assets/landing-share.svg' alt='공유-이미지' />
        </article>
        <article className={styles.mainBox}>
          <h2 className={styles.title}>
            저장한 링크를
            <br />
            <GradientText startColor='#fe578f' endColor='#68e8f9'>
              검색
            </GradientText>
            해 보세요
          </h2>
          <p className={styles.description}>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          <img className={styles.mainImage} src='./assets/landing-search.svg' alt='검색-이미지' />
        </article>
      </main>
    </>
  );
};

export default Home;
