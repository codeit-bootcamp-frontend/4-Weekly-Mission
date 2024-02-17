import React from 'react';
import '../style/actionContainer.css';
import shareIcon from '../images/share.svg';
import penIcon from '../images/pen.svg';
import deleteIcon from '../images/delete.svg';

function ActionContainer({ folderName }) {
  return (
    <div className="action-container-box">
      <p>{folderName}</p>
      {folderName !== '전체' && (
        <div className="action-container-icon">
          <a>
            <img src={shareIcon} />
            <div>공유</div>
          </a>
          <a>
            <img src={penIcon} />
            <div>이름 변경</div>
          </a>
          <a>
            <img src={deleteIcon} />
            <div>삭제</div>
          </a>
        </div>
      )}
    </div>
  );
}

export default ActionContainer;
