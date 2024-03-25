/** @jsxImportSource @emotion/react */
import { divStyle, imgWrapperStyle, imgStyle, pStyle, h1Style } from './styles'
import useGetFolder from '../../../../hooks/useGetFolder'
import '../../../../styles/common.css'

const Profile = () => {
  const { ownerImage, ownerName, folder } = useGetFolder()
  //훅에서 비동기처리가 되기 전에 계속 return문이 실행되는 문제가 발생합니다..
  //그래서 profile이 렌더링이 안됩니다.. 문제가 무엇일까요?
  return (
    <div css={divStyle}>
      <div css={imgWrapperStyle}>
        {ownerImage && <img src={ownerImage} css={imgStyle} alt="아바타" />}
      </div>

      <p css={pStyle}>{ownerName}</p>
      <h1 css={h1Style}>{folder}</h1>
    </div>
  )
}

export default Profile
