import { useEffect, useState } from 'react';
import { getLinks } from '../../api';
import '../../assets/styles/FolderCardList.css';
import FolderCardItem from './FolderCardItem';
import useAsync from '../hooks/useAsync';
import shareIcon from '../../assets/images/share.svg';
import penIcon from '../../assets/images/pen.svg';
import deleteIcon from '../../assets/images/delete.svg';
import ModalPortal from '../common/ModalPortal';
import Modal from '../modal/Modal';

const FolderCardList = ({ id, name }) => {
  const { result, execute, loading } = useAsync(() => getLinks(id));
  const { data: links } = result || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState('');

  useEffect(() => {
    execute();
  }, [id]);

  const handleClick = (text) => {
    setAction(text);
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="folder-list">
        <div className="folder-list-container">
          <div className="folder-name">{name}</div>
          {name !== '전체' && (
            <div className="folder-icons">
              <button onClick={() => handleClick('share')}>
                <img src={shareIcon} alt="share-icon" />
                공유
              </button>
              <button onClick={() => handleClick('rename')}>
                <img src={penIcon} alt="pen-icon" />
                이름 변경
              </button>
              <button onClick={() => handleClick('delete-folder')}>
                <img src={deleteIcon} alt="delete-icon" />
                삭제
              </button>
            </div>
          )}
        </div>
      </div>
      {loading ? (
        <div className="no-link-data">데이터를 불러오는 중...</div>
      ) : (
        <>
          {links && links.length > 0 ? (
            <div className="card-list">
              <div className="card-list-container">
                {links.map((item) => (
                  <FolderCardItem key={item.id} link={item} />
                ))}
              </div>
            </div>
          ) : (
            <div className="no-link-data">저장된 링크가 없습니다.</div>
          )}
        </>
      )}
      {isModalOpen && (
        <ModalPortal>
          <Modal action={action} data={name} closeModal={() => setIsModalOpen(false)} />
        </ModalPortal>
      )}
    </>
  );
};
export default FolderCardList;
