import Link from 'next/link';

import { getFolderList } from '@/apis/api';

const TOTAL_LIST_NAME = "전체"

interface DataItem {
  id: number;
  name: string;
}

const getFolderListData = async () => {
  try {
    const { data } = await getFolderList();

    return data;
  } catch {
    throw new Error('error');
  }
}

const FolderList = async () => { // 수정 부분
  const data = await getFolderListData();

  return (
    <div className='container-folder-and-cards'>
      <div className='container-folder-list'>
        <div className='folder-list'>
          <Link 
            href={{
              pathname: '/folder',
            }} 
            className='folder-list_btn' 
          >
            {TOTAL_LIST_NAME}
          </Link>
          {data.map(({ id, name }: DataItem) => (
            <Link 
              href={{
                pathname: "/folder",
                query: { name: name, id: id }
              }} 
              key={id} 
              className='folder-list_btn'
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FolderList