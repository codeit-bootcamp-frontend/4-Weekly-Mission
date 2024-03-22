import { getFolderList } from '@/apis/api';

import './ModalList.css';

const getFolderListData = async () => {
  try {
    const { data } = await getFolderList();

    return data;
  } catch {
    throw new Error('error');
  }
}

const ModalList = async () => {
  const list = await getFolderListData();
  console.log(list);
  return (
    <ul className="modalFolderList">
      {list.map(({ id, name, link }: any) => (
        <li key={id} className='modalFolder'>
          <span className='modalFolderName'>{name}</span>
          <span className='modalLinkCounts'>{`${link.count}개 링크`}</span>
        </li>
      ))}
    </ul>
  );
}

export default ModalList;