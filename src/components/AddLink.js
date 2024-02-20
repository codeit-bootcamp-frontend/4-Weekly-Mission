import { useState } from 'react';
import AddLinkModal from './common/modal/AddLinkModal';
import Button from './common/Button';
import link from '../images/link.svg';
import './AddLink.css';

export default function AddLink({ folderListData }) {
  const [showModal, setShowModal] = useState(false);
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const toggleShowModal = () => setShowModal(!showModal);
  const folderNameAndLinkList = folderListData?.map(({ name, link, id }) => [name, link.count, id]);

  return (
    <div className="addLinkContainer">
      <div className="addLink">
        <div className="linkInput">
          <img src={link} alt="링크" />
          <input value={newLinkUrl} placeholder="링크를 추가해 보세요" onChange={e => setNewLinkUrl(e.target.value)} />
        </div>
        <Button onClick={toggleShowModal}>추가하기</Button>
      </div>
      {showModal && (
        <AddLinkModal folderNameAndLinkList={folderNameAndLinkList} onClose={toggleShowModal} linkUrl={newLinkUrl} />
      )}
    </div>
  );
}
