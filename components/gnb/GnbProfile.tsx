import Image from 'next/image';

import { getUser } from '@/apis/api'

const getProfileData = async () => {
  try {
    const { data } = await getUser();

    return data;
  } catch {
    throw new Error('error');
  }
}

// server component : 상태와 부수 효과, 생명주기를 가질 수 없음.
const GnbProfile = async () => {
  const [user] = await getProfileData();

  return (
    <div className='account'>
      <div className="account-img">
        <Image fill src={user.image_source} alt={`${user.email} 프로필`} />
      </div>
      <span className='account-email'>{user.email}</span>
    </div>
  )
} 

export default GnbProfile