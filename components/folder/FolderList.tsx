import Link from 'next/link';

import { getFolderList, getLink } from '@/apis/api';

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

const FolderList = async () => {
  const data = await getFolderListData();

  return (
    <div className='container-folder-list'>
      <div className='folder-list'>
        <button className='folder-list_btn'>{TOTAL_LIST_NAME}</button>
        {data.map(({ id, name }: DataItem) => (
          <Link href={`folder/${name}`} key={id} className='folder-list_btn'>
            {name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FolderList