import { useState } from 'react';
import Button from './common/Button';
import link from '../images/link.svg';
import './AddLink.css';

export default function AddLink() {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);
  console.log(showModal);
  return (
    <div className="addLinkContainer">
      <div className="addLink">
        <div className="linkInput">
          <img src={link} alt="링크" />
          <input placeholder="링크를 추가해 보세요" />
        </div>
        <Button onClick={toggleShowModal}>추가하기</Button>
      </div>
    </div>
  );
}
