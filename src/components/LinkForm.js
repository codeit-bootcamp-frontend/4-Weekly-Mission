import React from 'react';
import '../style/linkform.css';
import linkIcon from '../images/link.svg';

const LinkForm = () => {
  return (
    <div>
      <div className="link-form-box">
        <form className="link-form">
          <img src={linkIcon} alt="link" />
          <input type="text" placeholder="링크를 추가해 보세요." />
          <button className="link-form-add">추가하기</button>
        </form>
      </div>
    </div>
  );
};

export default LinkForm;
