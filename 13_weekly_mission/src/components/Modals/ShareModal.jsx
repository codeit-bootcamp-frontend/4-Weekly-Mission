import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import styled from 'styled-components';
import { FacebookShareButton, FacebookIcon } from 'react-share';

function ShareModal({ onClose }) {
  const currentUrl = window.location.href;
  const Div = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Div onClick={onClose}>
      <div
        id="EditModal"
        onClick={e => {
          e.stopPropagation();
        }}>
        <FontAwesomeIcon icon={faXmark} className="EditModalX" onClick={onClose} />
        <p id="EditModalText">폴더 공유</p>
        <div className="centerSpace">폴더명</div>
        <div className="snsButton">
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon size={36} round={true}></FacebookIcon>
          </FacebookShareButton>
        </div>
      </div>
    </Div>
  );
}

export default ShareModal;
