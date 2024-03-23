import * as S from "./Profile.style"
import defaultImage from "assets/images/icon/avatar.svg"

interface ProfileProps {
  data: {
    email: string
    id: number
    image_source: string
    name: string
  }
}

function Profile({ data }: ProfileProps) {
  const image = data.image_source || defaultImage

  return (
    <S.Profile>
      <S.Image src={image} alt="프로필 이미지" />
      <S.Email>{data.email}</S.Email>
    </S.Profile>
  )
}

export default Profile
