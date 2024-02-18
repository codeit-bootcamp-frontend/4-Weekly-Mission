import titleLogo from './images/white.svg';
import './Section.css';

export default function Section() {
  return (
    <section id="sectionShared">
      <div className="title">
        <div className="titleContent">
          <img className="titleLogo" src={titleLogo} alt="코드잇 로고" />
          <p>@코드잇</p>
        </div>
        <p className="bookmark">⭐즐겨찾기</p>
      </div>
    </section>
  );
}
