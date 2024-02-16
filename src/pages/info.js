import '../styles/info.css';

const Info = () => {
  return (
    <div className="folder-info">
      <div className="folder-profile">
        <div className="folder-user">
          <img className="folder-image" alt="폴더의 프로필 이미지." />
          <p className="folder-username">@홍길동</p>
        </div>
        <h1 className="folder-name">⭐️ 즐겨찾기</h1>
      </div>
    </div>
  );
}

export default Info;