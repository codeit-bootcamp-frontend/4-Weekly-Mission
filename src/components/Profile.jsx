import { useGetData } from "./Hooks/useAsync";

// SharedHeader의 Profile 부분
function Profile() {
  const { data, error, loading } = useGetData("/sample/folder");

  if (loading) return <div>Profile 로딩중...</div>;
  if (error) return <div>Profile에 에러가 발생했습니다.</div>;

  console.log(data);

  return (
    <div>
      <h2>SharedHeader의 Profile입니다.</h2>
      <div>
        <div>
          <img src={data.folder.owner.profileImageSource} alt="profile" />
          <span>{data.folder.owner.name}</span>
        </div>
        <span>{data.folder.name}</span>
      </div>
    </div>
  );
}

export default Profile;
