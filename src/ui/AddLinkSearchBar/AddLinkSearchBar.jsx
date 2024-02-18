import './AddLinkSearchBar.css';
import { LINK_IMAGE } from './constant';

export const AddLinkSearchBar = () => {
  return (
    <div className="AddLinkSearchBar">
      <div className="AddLinkSearchBar-position">
        <img
          src={LINK_IMAGE}
          alt="링크 추가창인 것을 알려주는 링크 아이콘"
          className="AddLinkSearchBar-icon"
        />
        <input
          className="AddLinkSearchBar-input"
          type="search"
          id="fileInput"
          placeholder="링크를 추가해 보세요."
        />
        <button className="AddLinkSearchBar-button">추가하기</button>
      </div>
    </div>
  );
};
