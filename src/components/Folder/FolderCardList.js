import { useEffect } from 'react';
import { getLinks } from '../../api';
import '../../assets/styles/FolderCardList.css';
import FolderCardItem from './FolderCardItem';
import useAsync from '../hooks/useAsync';
import shareIcon from '../../assets/images/share.svg';
import penIcon from '../../assets/images/pen.svg';
import deleteIcon from '../../assets/images/delete.svg';

const FolderCardList = ({ id, name }) => {
  const { result, execute, loading } = useAsync(() => getLinks(id));
  const { data: links } = result || [];

  useEffect(() => {
    execute();
  }, [id]);

  return (
    <>
      <div className="folder-list">
        <div className="folder-list-container">
          <div className="folder-name">{name}</div>
          {name !== '전체' && (
            <div className="folder-icons">
              <div>
                <img src={shareIcon} />
                공유
              </div>
              <div>
                <img src={penIcon} />
                이름 변경
              </div>
              <div>
                <img src={deleteIcon} />
                삭제
              </div>
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
    </>
  );
};
export default FolderCardList;
