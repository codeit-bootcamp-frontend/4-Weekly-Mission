import { Link } from "react-router-dom";
import Button from "./Button";

function Home() {
  return (
    <>
      <article className="first_page_back">
        <div className="first_page">
          <div className="infors">
            <div className="infor">
              <span>세상의 모든 정보</span>를
            </div>
            <Button>Hello Styled!</Button>
            <div className="br">
              <div className="infor">쉽게 저장하고</div>
              <div className="infor">관리해 보세요.</div>
            </div>
          </div>
          <Link to="/folder">
            <a className="link_btn btn" href="./">
              링크 추가하기
            </a>
          </Link>
          <div className="first_page_img_back">
            <div className="first_page_img"></div>
          </div>
        </div>
      </article>
      <article className="text_img">
        <section className="next_page">
          <div className="texts">
            <div className="text">
              <span>원하는 링크</span>를 저장하세요
            </div>
            <div className="text_sml">
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </div>
          </div>
          <p className="imgs img_dog" alt="dog"></p>
        </section>

        <section className="next_page left">
          <p className="imgs img_folder" alt="folder"></p>
          <div className="texts">
            <div className="text">
              링크를 폴더로
              <span>관리</span>하세요
            </div>
            <div className="text_sml">
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </div>
          </div>
        </section>

        <section className="next_page">
          <div className="texts">
            <div className="text">
              저장한 링크를
              <span>공유</span>해 보세요.
            </div>
            <div className="text_sml">
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </div>
          </div>
          <p className="imgs img_share" alt="share"></p>
        </section>

        <section className="next_page left">
          <p className="imgs img_search" alt="search"></p>
          <div className="texts">
            <div className="text">
              저장한 링크를
              <span>검색</span>해 보세요
            </div>
            <div className="text_sml">
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default Home;
