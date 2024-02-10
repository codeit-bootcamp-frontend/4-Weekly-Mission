import React from 'react';
import '../style/Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='LandingContainer'>
      <main>
        <div className='MainContent'>
          <h1 className='MainTitle'>
            <span>세상의 모든 정보</span>를
            <br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <Link to='/signup' className='MainLink'>
            링크 추가하기
          </Link>
        </div>
      </main>
      <article>
        <section>
          <div className='SectionContent'>
            <h2 className='SectionTitle'>
              <span className='SectionGradient1'>원하는 링크</span>를 저장하세요
            </h2>
            <p className='Description'>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을
              <br className='LineBreakPcTablet' />한 공간에 저장하세요.
            </p>
          </div>
        </section>
        <section>
          <div className='SectionContent'>
            <h2 className='SectionTitle'>
              링크를 폴더로
              <span className='SectionGradient2'>관리</span>하세요
            </h2>
            <p className='Description'>
              나만의 폴더를 무제한으로 만들고
              <br className='LineBreakPcTablet' />
              다양하게 활용할 수 있습니다.
            </p>
          </div>
        </section>
        <section>
          <div className='SectionContent'>
            <h2 className='SectionTitle'>
              저장한 링크를
              <span className='SectionGradient3'>공유</span>해 보세요
            </h2>
            <p className='Description'>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </p>
          </div>
        </section>
        <section>
          <div className='SectionContent'>
            <h2 className='SectionTitle'>
              저장한 링크를
              <span className='SectionGradient4'>검색</span>해 보세요
            </h2>
            <p className='Description'>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Landing;
