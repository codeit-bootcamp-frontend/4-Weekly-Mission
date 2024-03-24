import "./UserTitle.css";
import { useRecoilValueLoadable } from "recoil";
import { profileData } from "../../store/store";
import { User } from "../../types/type";

function UserTitle() {
  const { contents } = useRecoilValueLoadable<User>(profileData);
  return (
    <article className="userTitle">
      <div>
        <div className="titleTop">
          <img src={contents?.owner?.profileImageSource} alt="사용자 이미지" />
          <p>{contents?.owner?.name}</p>
        </div>
        <div className="titleBottom">
          <h2>{contents?.name}</h2>
        </div>
      </div>
    </article>
  );
}

export default UserTitle;
