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
      <img className="account-img" src={user.image_source} alt={`${user.email} 프로필`} />
      <span className='account-email'>{user.email}</span>
    </div>
  )
} // img 태그 사용 이유 : Image는 최적화가 가능한 대신, public에 존재해야 한다. 즉, 서버에서 다운로드한 이미지는 사용 불가.

export default GnbProfile